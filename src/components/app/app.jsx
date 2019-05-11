import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page.jsx";

const App = (props) => {
  return <MainPage places={props.topPlaces} />;
};

App.propTypes = {
  topPlaces: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default App;
