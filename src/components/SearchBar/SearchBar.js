import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.css';

const SearchBar = ({ valueInput, handleChangeInput }) => (
  <input
    name="value"
    type="text"
    value={valueInput}
    className={styles.input}
    onChange={handleChangeInput}
  />
);
SearchBar.propTypes = {
  valueInput: PropTypes.string.isRequired,
  handleChangeInput: PropTypes.func.isRequired,
};
export default SearchBar;
