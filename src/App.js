
import './App.css';
import Dictionary from "./Dictionary";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <img src={require('.//logo1.png')} className="App-logo" alt="logo" />     
       </header>
       <Dictionary />
    <footer><small>This project was coded by <a href="https://www.linkedin.com/in/liubov-shupik-46940016b/" target="_blank" rel="noreferrer">Liubov Shupik</a> and is <a href="https://github.com/fel562/dict" target="_blank" rel="noreferrer">open-sourced on GitHub</a> and <a href="https://dictionary-shupik.netlify.app/" id="testlink" target="_blank" rel="noreferrer">hosted on Netlify</a></small></footer>
    </div>
  );
}

export default App;
