import React, {Component} from 'react';
import MoviesCard from "../../Components/MoviesCard/MoviesCard";
import FormMovies from "../../Components/FormMovies/FormMovies";
import {MoviesType} from "../../types";
import './Movies.css';

interface State {
  movies: MoviesType[];
}

class Movies extends Component {
  state: State = {
    movies: [
      {id: '0.1', text: 'Этот неловкий момент: 2014'},
      {id: '0.2', text: 'Project X: 2012'},
    ]
  }

  addNewMovie = (movie: MoviesType) => {
    this.setState({movies: [...this.state.movies, movie]});
  };

  changeInputValue = (id: string, value: string) => {
    const copyMovies = [...this.state.movies];
    const index = this.state.movies.findIndex(item => item.id === id);
    const movie = {...this.state.movies[index]};
    movie.text = value;
    copyMovies[index] = movie;
    this.setState({movies: copyMovies});
  };

  deleteInputMovie = (id: string) =>{
    this.setState({movies: this.state.movies.filter(item => item.id !== id)});
  };

  render() {
    return (
      <div className="movies-block">
        <div className="movies-inner">
          <FormMovies onSubmit={this.addNewMovie}/>
        </div>
        {this.state.movies.map(item => (
          <MoviesCard
            key={item.id}
            film={item}
            inputChangeValue={this.changeInputValue}
            delete={() => this.deleteInputMovie(item.id)}
          />
        ))}
      </div>
    );
  }
}

export default Movies;