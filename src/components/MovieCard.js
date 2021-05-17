import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, id, imagePath, rating, storyline } = movie;
    return (
      <div data-testid="movie-card" className="movieCard">
        <img src={ imagePath } alt={ `Capa do filme ${title}` } className="movieCover" />
        <h3>{ title }</h3>
        <div>{`Rating: ${rating}`}</div>
        <div>
          <strong>Synopsis: </strong>
          {storyline}
        </div>
        <div>
          <Link to={ `movies/${id}` }>
            <button type="button" className="detailsbtn">VER DETALHES</button>
          </Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
