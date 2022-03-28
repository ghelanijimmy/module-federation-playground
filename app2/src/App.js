import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import { AppContext } from "app3/Store";
import { theme } from "./theme/theme";

const Button = React.lazy(() => import("components/Components"));

function App() {
  const c = useContext(AppContext);
  console.log(c);
  return (
    <React.Suspense fallback={null}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App-link">Hello, {c?.state?.name}</p>
            <p className="App-link">Welcome to Module Federation</p>
            <Button text="UI Button" theme={theme} />
          </header>
        </div>
      </ThemeProvider>
    </React.Suspense>
  );
}

export default App;
