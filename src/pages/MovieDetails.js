import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    console.log(id);
    movieAPI.getMovie(id)
      .then((resolve) => this.handleMovies(resolve));
  }

  handleMovies = (param) => {
    this.setState({
      movie: param,
      loading: false,
    });
    console.log(this.state);
  }

  handleReturn = () => {
    const { loading, movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h4>{ `Subtitle: ${title}` }</h4>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <button type="button">
          <Link to={ `/movies/${movie.id}/edit` }>EDITAR</Link>
        </button>
        <button type="button"><Link to="/">VOLTAR</Link></button>
      </div>
    );
  }

  render() {
    // Change the condition to check the state

    return (
      <section>
        { this.handleReturn() }
      </section>
    );
  }
}

MovieDetails.propTypes = {
  id: PropTypes.number,
}.isRequired;

export default MovieDetails;
