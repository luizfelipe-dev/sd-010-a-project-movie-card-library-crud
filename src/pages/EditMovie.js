import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';
import movies from '../services/movieData';

export default class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldRedirect: false,
      status: 'loading',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // --- solução encontrada por 'Paulo Eliezer' e adaptada a este projeto

  componentDidMount() {
    this.fillForm();
  }

  componentDidUpdate() {
    console.log(movies);
  }

  async handleSubmit(updatedMovie) {
    await movieAPI.updateMovie(updatedMovie);
    await this.setState({
      shouldRedirect: true,
    });
  }

  async fillForm() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState({
      movie: movieAPI.getMovie(id),
      status: undefined,
    });
  }
  // --- fim do cometário.

  render() {
    const { status, shouldRedirect, movie } = this.state;

    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === 'down') {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.object,
}.isRequired;
