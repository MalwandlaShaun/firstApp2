import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>dude you work now?</div>
        <input type="text"></input>
        <input type="button" title="submit"></input>
      </header>
    </div>
  );
}

export default App;
