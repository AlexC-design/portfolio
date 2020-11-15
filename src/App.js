import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import { LastLocationProvider } from "react-router-last-location";
import Navbar from "./components/Navbar/Navbar";
import Routes from "./components/Routes";
import ScrollingTriangles from "./components/ScrollingTriangles/ScrollingTriangles";

function App() {
  const [loading, setLoading] = useState(false);

  // const cacheImages = async images => {
  //   const promises = await images.map(
  //     src =>
  //       new Promise((resolve, reject) => {
  //         const img = new Image();

  //         img.src = src;
  //         img.onload = resolve();
  //         img.onerror = reject();

  //         console.log(img)
  //       })
  //   );

  //   await Promise.all(promises);

  //   setLoading(false);
  // };

  // useEffect(() => {
  //   const tmbs = [
  //     "beacon",
  //     "bug-tracker",
  //     "fin",
  //     "movie-cluster",
  //     "new-folio",
  //     "old-folio",
  //     "ui-components"
  //   ];

  //   const images = tmbs.map(
  //     name => `https://omperiap.sirv.com/portfolio/tmbs/${name}.jpg`
  //   );

  //   cacheImages(images);
  // }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <HashRouter basename="/">
          <LastLocationProvider>
            <ScrollingTriangles />
            <Navbar />
            {loading ? <div>loading...</div> : <Routes />}
          </LastLocationProvider>
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;
