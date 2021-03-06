import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const mock = {
  places: [
    {
      id: 1,
      title: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
      mark: `Premium`,
      imgSrc: `img/apartment-01.jpg`,
      price: 120,
      priceText: `night`,
      rating: 93,
      coordinates: [52.3909553943508, 4.85309666406198]
    },
    {
      id: 2,
      title: `Wood and stone place`,
      type: `Private room`,
      mark: ``,
      imgSrc: `img/room.jpg`,
      price: 80,
      priceText: `night`,
      rating: 80,
      coordinates: [52.3909553943508, 4.85309666406198]
    },
  ]
};

it(`App correctly renders`, () => {
  const {places} = mock;
  const tree = renderer.create(<App offers={places} city={[52.38333, 4.9]} zoom={12} />).toJSON();
  expect(tree).toMatchSnapshot();
});
