import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        Movie Card Library CRUD !
        <Switch>
          <Route
            path="/movies/:id/edit"
            render={ (props) => <EditMovie { ...props } /> }
          />
          <Route path="/movies/new" component={ NewMovie } />
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
          <Route path="" component={ NotFound } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
