import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';


export default function Dictionary(){
    let [keyword,setKeyword]=useState("");
    function search(event){
        event.preventDefault();
        alert(`searching for ${keyword}`);

    }
    function handleKeywordChange(event){
        console.log(event.target.value);
        setKeyword(event.target.value);
    }
    return (
        <div>
            <h1>Dictionary</h1>
            <h2>What word you want to look up?
            </h2>
            <div className="dictionary">
                <form onSubmit={search} onChange={handleKeywordChange}><input type="search" auto-focus="true" className="mysearch" placeholder="search"></input>
                </form>
                </div>
         </div>
    );
}