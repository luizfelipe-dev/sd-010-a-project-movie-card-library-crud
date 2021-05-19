import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, imagePath, storyline } } = this.props;
    return (
      <div data-testid="movie-card" className="movieCard">
        <h3>{ title }</h3>
        <img alt={ title } src={ imagePath } />
        <span>{ storyline }</span>
        <Link to="/movie">VER DETALHES</Link>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
