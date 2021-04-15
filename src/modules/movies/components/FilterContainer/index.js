import React, { useEffect, useCallback } from 'react';

// antd
import { Form, Input, Select, Button, Row } from 'antd';

// redux
import { useDispatch } from 'react-redux';
import { getMovieList, setMovieList, setLoading } from '@redux/actions';

// utils
import { genreList, yearList } from '../../utils';

// styling
import './index.less';

const { Option } = Select;

const FilterContainer = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleFetchMovieList = useCallback(() => {
    console.log('[USE_CALLBACK]');
    dispatch(getMovieList(''))
    .catch(err => {
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
  }, []);

  useEffect(() => {
    handleFetchMovieList();
  }, [handleFetchMovieList])

  const handleGenreChange = (e) => {
    const selectedYear = form.getFieldValue('year');
    dispatch(getMovieList(''))
    .then((res) => {
      const filtered = res.filter(movie => {
        return !selectedYear
        ? movie.genre === e
        : movie.genre === e && movie.productionYear === +selectedYear;
      });
      dispatch(setMovieList(filtered));
    })
    .catch(err => {
      form.resetFields();
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
  };

  const handleYearChange = (e) => {
    const selectedGenre = form.getFieldValue('genre');
    dispatch(getMovieList(''))
    .then((res) => {
      const filtered = res.filter(movie => {
        return !selectedGenre
        ? movie.productionYear === +e
        : movie.productionYear === +e && movie.genre === selectedGenre
      });
      dispatch(setMovieList(filtered));
    })
    .catch(err => {
      form.resetFields();
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
  };

  const handleClearFilter = () => {
    form.resetFields();
    dispatch(getMovieList(''))
    .then()
    .catch(() => {

      handleFetchMovieList()
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
  };

  const handleClearGenreFilter = () => {
    form.setFieldsValue({ genre: '' });
    const selectedYear = form.getFieldValue('year');
    dispatch(getMovieList(''))
    .then((res) => {
      const filtered = res.filter(movie => {
        return movie.productionYear === +selectedYear;
      });
      dispatch(setMovieList(filtered));
    })
    .catch(err => {
      form.resetFields();
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
  };

  const handleClearYearFilter = () => {
    form.setFieldsValue({ year: '' });
    const selectedGenre = form.getFieldValue('genre');
    dispatch(getMovieList(''))
    .then((res) => {
      const filtered = res.filter(movie => {
        return movie.genre === selectedGenre;
      });
      dispatch(setMovieList(filtered));
    })
    .catch(err => {
      form.resetFields();
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
  };

  const handleTitleChange = (evt) => {
    const { value } = evt.target;
    console.log('[handleTi] ', value);

    dispatch(getMovieList(''))
    .then((res) => {
      console.log('[res] ', value)
      const filtered = res.filter(movie => {
        return movie.name.indexOf(value) > -1;
      });
      dispatch(setMovieList(filtered));
    })
    .finally(() => {
      dispatch(setLoading(false));
    });
  };

  return (
    <Row justify="end" className="filter-container">
      <Form
        layout="inline"
        form={form}
      >

        <Form.Item label="Search by Title" name="title">
          <Input allowClear onChange={handleTitleChange}/>
        </Form.Item>

        <Form.Item label="Filter By Genre" name="genre">
          <Select style={{ width: 220 }} onChange={handleGenreChange}>
            {genreList.map((item) => (
              <Option key={item.value} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Button style={{ marginRight: 10 }} type="primary" onClick={handleClearGenreFilter}>
          Clear Genre Filter
        </Button>

        <Form.Item label="Filter By Year" name="year">
          <Select style={{ width: 220 }} onChange={handleYearChange}>
            {yearList.map((item) => (
              <Option key={item.value} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Button style={{ marginRight: 10 }} type="primary" onClick={handleClearYearFilter}>
          Clear Year Filter
        </Button>

        <Button type="primary" onClick={handleClearFilter}>
          Clear Filters
        </Button>

      </Form>
    </Row>
  );
};

export default FilterContainer;
