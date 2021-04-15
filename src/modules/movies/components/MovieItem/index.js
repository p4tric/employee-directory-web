import React from 'react';
import { useHistory } from 'react-router-dom';

// antd
import { Card, Divider, Typography } from 'antd';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setMovieDetail } from '@redux/actions';

// picture
import movieImage from '@images/pexels-martin-lopez-1117132.jpg';

const { Meta } = Card;
const { Text } = Typography;

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { genre, name,
    productionYear, synopsisShort } = movie;
  const { loading } = useSelector(state => state);

  const handleCardClick = (event, m) => {
    event.preventDefault();
    dispatch(setMovieDetail(m));
    history.push(`/movies?title=${m.name}`);
  };

  return (
    <div style={{ margin: 10 }}>
      <Card
        loading={loading}
        onClick={(e) => handleCardClick(e, movie)}
        type="inner"
        hoverable
        style={{ boxSizing: 'border-box', marginLeft: 50, height: 400, width: 400 }}
        cover={<img style={{ height: 200, width: 400, objectFit: 'cover' }} alt="movie image" src={movieImage} />}
        >
        <Meta
          title={(
            <>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                <Text strong>{name}</Text>
                <div style={{ fontSize: 10, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                  <Text type="secondary">Genre: {genre}</Text>
                  <Text type="secondary">Production Year: {productionYear}</Text>
                </div>
              </div>
            </>

          )}
          description={synopsisShort} />
      </Card>
    </div>

  );
};

export default MovieItem;
