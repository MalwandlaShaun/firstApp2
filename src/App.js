import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>dude you work now?</div>
        <form>
          <input type="text"></input>
          <br />
          <input type="text"></input>
          <br />
          <button type="button">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
