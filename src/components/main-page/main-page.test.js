import React from "react";
import renderer from "react-test-renderer";
import MainPage from "./main-page";

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
      rating: 93
    },
    {
      id: 2,
      title: `Wood and stone place`,
      type: `Private room`,
      mark: ``,
      imgSrc: `img/room.jpg`,
      price: 80,
      priceText: `night`,
      rating: 80
    },
  ]
};

it(`Main-page correctly renders`, () => {
  const {places} = mock;
  const tree = renderer
    .create(<MainPage places={places} />).toJSON();
  expect(tree).toMatchSnapshot();
});
