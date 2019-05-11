import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page";

it(`Main-page correctly renders`, () => {
  const tree = renderer
    .create(<MainPage
      places={[
        `Beautiful & luxurious apartment at great location`,
        `Wood and stone place`,
        `Canal View Prinsengracht`,
        `Nice, cozy, warm big bed apartment`,
        `Wood and stone place`
      ]}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
