import React, {useCallback, useEffect, useState} from 'react';
import {JokesType} from "../../types";
import './Jokes.css';
import Button from "../../Components/Button/Button";

const url = 'https://api.chucknorris.io/jokes/random';

const Jokes = () => {
  const [joke, setJoke] = useState<JokesType | null>(null);

  const getJoke = useCallback(async () => {
    try {
      const response = await fetch(url);
      const responseJson: JokesType = await response.json();
      setJoke(responseJson);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    getJoke().then(r => r);
  }, [getJoke]);

  return (
    <div className="joke-block">
      <div className="joke-inner">
        <h3 className="joke-title">Chuck Norris joke generator</h3>
      </div>
      <div className="top-block">
        {joke && <p className="joke-text" key={Math.random()}><b>Joke:</b> {joke.value}</p>}
        <Button
          onClick={getJoke}
        />
      </div>
    </div>
  );
};

export default Jokes;