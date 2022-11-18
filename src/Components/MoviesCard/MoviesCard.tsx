import React, {Component} from 'react';
import {MoviesType} from "../../types";
import './MoviesCard.css';

interface Props {
  film: MoviesType;
  inputChangeValue: (id: string, value: string) => void;
  delete: () => void;
}

interface State {
  movie: MoviesType;
}

class MoviesCard extends Component<Props, State> {
  state: State = {
    movie: {
      id: this.props.film.id,
      text: this.props.film.text
    }
  };

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>): boolean {
    return nextProps.film.text !== nextState.movie.text;
  }

  render() {
    return (
      <div className="movies-card">
        <input
          type="text"
          value={this.props.film.text}
          onChange={(e) => this.props.inputChangeValue(this.props.film.id, e.target.value)}
        />
        <button
          className="movie-card-btn"
          onClick={this.props.delete}>❌</button>
      </div>
    );
  }
}

export default MoviesCard;