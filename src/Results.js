import React from "react";
import "./App.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="result">
        <h2>{props.results.word}</h2>
        {props.results.phonetic}
        {props.results.meanings[0].partOfSpeech}
      </div>
    );
  } else {
    return null;
  }
}
