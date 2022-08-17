import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


export default function Dictionary(){
    function search(){
        alert("searching");

    }
    return (
        <div>
            <h1>Dictionary</h1>
            <h2>What word you want to look up?
            </h2>
            <div className="dictionary">
                <form onSubmit={search}><input type="search" auto-focus="true" className="mysearch" placeholder="search"></input>
                </form>
                </div>
         </div>
    );
}