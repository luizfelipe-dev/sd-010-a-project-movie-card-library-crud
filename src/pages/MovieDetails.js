import React, { Component } from 'react';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

const { getMovie } = movieAPI;

export default class MovieDetails extends Component {

  constructor() {
    super();

    this.state = {
      movie: [],
    };
  }

  componentDidMount() {
    this.buildMovieDetails();
  }

  // --- solução encontrada por 'Paulo Eliezer' e adaptada a este projeto
  async buildMovieDetails() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState({
      movie: await getMovie(id),
    });
  }

  // --- fim do comentário.

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;
    const { movie } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle } = movie;

    if (!title) {
      return <Loading />;
    }

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <h3>{ `Title: ${title}` }</h3>
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}
