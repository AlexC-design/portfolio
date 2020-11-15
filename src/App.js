import React from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { LastLocationProvider } from "react-router-last-location";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./components/Routes";
import ScrollingTriangles from "./components/ScrollingTriangles/ScrollingTriangles";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HashRouter basename="/">
          <LastLocationProvider>
            <ScrollingTriangles />
            <Navbar />
            <Routes />
          </LastLocationProvider>
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
