import React from 'react';
// import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {

  render() {
    const { movie } = this.props;
    return (
      <div data-testid="movie-card">
        Movie Card
        <p>{ movie.title }</p>
        <p>{ movie.subtitle }</p>
        <p>{ movie.storyline }</p>
        <Link to={ `movies/${movie.id}` }>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;
