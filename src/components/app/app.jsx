import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page.jsx";

const App = (props) => {
  return <MainPage places={props.offers} city={props.city} zoom={props.zoom} />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        mark: PropTypes.string,
        imgSrc: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        priceText: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
      })
  ).isRequired,
  city: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
};

export default App;
