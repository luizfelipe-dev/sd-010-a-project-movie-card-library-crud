import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// eslint-disable-next-line
import { Loading, MovieCard, MovieForm } from './components/index';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route exact path="/" component={ MovieList } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
