import React from 'react';
import { useHistory } from 'react-router-dom';

// antd
import { Button, Col, Form, Input, Row, Typography } from 'antd';

const { Title } = Typography;

const EmployeeSearch = () => {
  const history = useHistory();
  const [form] = Form.useForm();

  const handleClickSearch = async (evt) => {
    const { searchString } = form.getFieldsValue();
    if (searchString && searchString !== '') {
      history.push(`/overview?name=${searchString}`);
    }
  };

  return (
    <>
      <Row style={{ height: '55vh' }} align="middle" justify="center">
        <Col style={{ textAlign: 'center' }}>
          <Title level={2}>Employee Explorer</Title>
          <Form layout="inline" form={form}>
            <Form.Item name="searchString">
              <Input allowClear placeholder="Enter employee name" size="large"/>
            </Form.Item>
            <Button size="large" style={{ marginRight: 10 }} type="primary" onClick={handleClickSearch}>
              Search
            </Button>
          </Form>

        </Col>
      </Row>
    </>
  );
};

export default EmployeeSearch;
