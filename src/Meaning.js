import React from "react";

export default function Meaning(props) {
  return (
    <div className="meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      <h4>{props.meaning.definitions[0].definition}</h4>
      <h4>{props.meaning.definitions[0].example}</h4>
    </div>
  );
}
