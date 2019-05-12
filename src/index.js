import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import offers from "./mocks/offers";

const init = (topOffers) => {
  ReactDOM.render(<App offers={topOffers} />, document.querySelector(`#root`));
};

init(offers);
