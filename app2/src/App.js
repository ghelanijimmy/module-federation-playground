import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppContext } from "app3/Store";

function App() {
  const c = useContext(AppContext);
  console.log(c);
  return (
    <React.Suspense fallback={null}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-link">Hello, {c?.state?.name}</p>
          <p className="App-link">Welcome to Module Federation</p>
        </header>
      </div>
    </React.Suspense>
  );
}

export default App;
