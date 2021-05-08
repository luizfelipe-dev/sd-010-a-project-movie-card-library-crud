import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ MovieList } />
      <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route component={ NotFound } />
      <div>Movie Card Library CRUD</div>
    </BrowserRouter>
  );
}

export default App;
