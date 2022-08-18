import React from "react";
import "./App.css";


export default function Results(props) {
  if (props.results) {
    return (
      <div className="result  pt-5 m-0 bg-white">
        <h2>{props.results.word}</h2>
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

