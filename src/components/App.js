import React, { Component } from 'react';
import MovieGrid from './MovieGrid/MovieGrid';
import SearchBar from './SearchBar/SearchBar';
import items from './movies.json';

const filterFilms = (films, filter) => {
  return films.filter(film =>
    film.title.toLowerCase().includes(filter.toLowerCase()),
  );
};

class App extends Component {
  state = {
    filter: '',
    films: items,
  };

  changedFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { filter, films } = this.state;
    const filteredFilms = filterFilms(films, filter);
    return (
      <div>
        <SearchBar valueInput={filter} handleChangeInput={this.changedFilter} />
        <MovieGrid items={filteredFilms} />
        {filteredFilms.length === 0 && (
          <p style={{ fontWeight: 700, marginLeft: 10, fontSize: 20 }}>
            No matching results!
          </p>
        )}
      </div>
    );
  }
}

export default App;
