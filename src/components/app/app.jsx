import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page.jsx";

const App = (props) => {
  return <MainPage places={props.offers} />;
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
