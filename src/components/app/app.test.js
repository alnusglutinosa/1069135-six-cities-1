import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it(`App correctly renders`, () => {
  const tree = renderer.create(<App topPlaces={[
    `Beautiful & luxurious apartment at great location`,
    `Wood and stone place`,
    `Canal View Prinsengracht`,
    `Nice, cozy, warm big bed apartment`,
    `Wood and stone place`
  ]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
