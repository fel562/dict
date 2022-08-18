import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState({});
  function search(event) {
    event.preventDefault();
    // alert(`searching for ${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
    console.log(response.data[0].meanings[0].partOfSpeech);
    setResults(response.data[0]);
  }
  function handleKeywordChange(event) {
    console.log(event.target.value);
    setKeyword(event.target.value);
  }
  return (
    <div>
      <h1>Dictionary</h1>
      <h2>What word you want to look up?</h2>
      <div className="dictionary">
        <form onSubmit={search} onChange={handleKeywordChange}>
          <input
            type="search"
            auto-focus="true"
            className="mysearch"
            placeholder="search"
          ></input>
        </form>
        <Results results={results} />
      </div>
    </div>
  );
}
