import React from "react";
import "./App.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="result">
        <h2>{props.results.word}</h2>
        {props.results.phonetic}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <h3>{props.meaning.partOfSpeech}</h3>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
