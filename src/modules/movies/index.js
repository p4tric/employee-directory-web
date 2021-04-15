import React from 'react';
import { useHistory } from 'react-router-dom';

// section
import MovieDetailSection from './sections/MovieDetailSection';
import MovieGridSection from './sections/MovieGridSection';

const MWrapper = () => {
  const history = useHistory();
  const { location } = history;
  
  return location.search === '' ? <MovieGridSection /> : <MovieDetailSection />;
};

export default MWrapper;
