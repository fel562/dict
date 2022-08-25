import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="phonetic">
      <ReactAudioPlayer src={props.phonetic.audio} controls />
      <br />
      {props.phonetic.text}
    </div>
  );
}
//<a href={props.phonetic.audio} target="_blank">
//       Listen here
//     </a>
