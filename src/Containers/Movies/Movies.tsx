import React, {Component} from 'react';
import MoviesCard from "../../Components/MoviesCard/MoviesCard";
import FormMovies from "../../Components/FormMovies/FormMovies";

class Movies extends Component {
  render() {
    return (
      <div>
        <FormMovies/>
        <MoviesCard/>
      </div>
    );
  }
}

export default Movies;