import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MovieGrid.module.css';

const MovieGrid = ({ items }) => {
  return (
    <ul className={styles.movieGrid}>
      {items.map(item => (
        <li key={item.id}>
          <MovieCard item={item} />
        </li>
      ))}
    </ul>
  );
};

MovieGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieGrid;
