import React, { useEffect } from 'react';

// antd
import { Col, Descriptions,
  Image, Row, Typography } from 'antd';

// redux
import { useSelector } from 'react-redux';


// picture
import movieImage from '@images/pexels-martin-lopez-1117132.jpg';

const { Title } = Typography;

const MovieDetailSection = () => {
  const { movieDetail } = useSelector(state => state);
  const { genre, name, image,
    productionYear, synopsis } = movieDetail;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Title level={2}>{name}</Title>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{ height: '100%' }} justify="space-around" align="top">
        <Col className="gutter-row" span={12}>
          <Image
            width={500}
            src={movieImage}
          />

          <Descriptions column={1} title="Movie Information">
            <Descriptions.Item label="Image">{image}</Descriptions.Item>
            <Descriptions.Item label="Genre">{genre}</Descriptions.Item>
            <Descriptions.Item label="Production Year">{productionYear}</Descriptions.Item>
          </Descriptions>

        </Col>

        <Col className="gutter-row" span={12}>
          <div dangerouslySetInnerHTML={{ __html: synopsis }} />
        </Col>
      </Row>
    </>
  );
};

export default MovieDetailSection;
