import React from "react";
import Joke from "./Joke";
import jokesData from "./JokeData";
import "./styles.css";
export default function App() {
  /* recorre todo el array de objetos */
  const jokeElements = jokesData.map((chiste) => {
    /* devuelve chiste. */
    return (
      <Joke setup={chiste.setup} punchline={chiste.punchline} key={chiste.id} />
    );
  });
  return <div>{jokeElements}</div>;
}
