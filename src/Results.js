import React from "react";
import "./App.css";

export default function Results(props) {
  console.log(props.results.license.name);
  console.log(props.results);
  if (props.results) {
    return (
      <div className="result">
        <h2>{props.results.word}</h2>
        {props.results.phonetic}
        {props.results.license.name}
        {props.results.meanings[0].partOfSpeech}
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
