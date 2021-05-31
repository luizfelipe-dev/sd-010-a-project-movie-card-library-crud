import React from 'react';
import { Route, Switch, BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Router>
        <div>Movie Card Library CRUD</div>
      </Router>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
