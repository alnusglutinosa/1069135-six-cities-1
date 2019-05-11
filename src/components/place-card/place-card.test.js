import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";

it(`Place-card correctly renders`, () => {
  const tree = renderer
    .create(<PlaceCard
      title={`Beautiful & luxurious apartment at great location`}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
