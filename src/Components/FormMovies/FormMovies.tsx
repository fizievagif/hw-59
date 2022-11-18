import React, {Component} from 'react';
import {MoviesType} from "../../types";
import './FormMovies.css';

interface Props {
  onSubmit: (movie: MoviesType) => void;
}

class FormMovies extends Component<Props> {
  state: MoviesType = {
    id: '',
    text: '',
  };

  formSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.onSubmit({...this.state, id: Math.random().toString(),});
  };

  inputValueChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState(prev => ({...prev ,text: e.target.value}));
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <input
          type="text"
          onChange={(e) => this.inputValueChange(e)}
          value={this.state.text}
          name="text"
          placeholder="List of films to watch"
        />
        <button className="movie-btn">Add Movie</button>
      </form>
    );
  }
}

export default FormMovies;