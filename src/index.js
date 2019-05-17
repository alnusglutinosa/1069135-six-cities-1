import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers";

const appSettings = {
  city: [52.38333, 4.9],
  zoom: 12,
};

const init = (topOffers) => {
  const {city, zoom} = appSettings;
  ReactDOM.render(<App offers={topOffers} city={city} zoom={zoom} />, document.querySelector(`#root`));
};

init(offers);
