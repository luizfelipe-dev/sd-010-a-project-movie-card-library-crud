import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Route
        exact
        path="/movies/:id/edit"
        render={ (props) => <EditMovie { ...props } /> }
      />
      <Switch>
        <Route exact path="/movies/new" render={ (props) => <NewMovie { ...props } /> } />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
      </Switch>

      <Route exact path="/" render={ (props) => <MovieList { ...props } /> } />
      <Route exact path="/:any" component={ NotFound } />
    </BrowserRouter>
  );
}

export default App;
