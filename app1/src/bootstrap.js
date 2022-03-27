import React, { useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppContext } from "app3/Store";

const App = React.lazy(() => import("app2/App"));
const AppProvider = React.lazy(() =>
  import("app3/Store").then((d) => {
    return {
      default: d.AppProvider,
    };
  })
);

const RootApp = () => {
  const { dispatch } = useContext(AppContext);
  useEffect(() => {
    dispatch({
      type: "INIT",
      payload: "JIMMY GHELANI",
    });
  }, [dispatch]);
  return <App />;
};

ReactDOM.render(
  <React.Suspense fallback={null}>
    <AppProvider>
      <RootApp />
    </AppProvider>
  </React.Suspense>,
  document.getElementById("root")
);
