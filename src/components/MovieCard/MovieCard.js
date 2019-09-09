import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

const MovieCard = ({ item }) => {
  const { title, posterUrl, overview } = item;
  return (
    <div className={styles.movieCard}>
      <img src={posterUrl} alt="poster" />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.descr}>{overview}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
