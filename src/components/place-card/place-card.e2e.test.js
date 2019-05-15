import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";

const mock = {
  place: {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    mark: `Premium`,
    imgSrc: `img/apartment-01.jpg`,
    price: 120,
    priceText: `night`,
    rating: 93,
    coordinates: [52.3909553943508, 4.85309666406198]
  }
};

Enzyme.configure({adapter: new Adapter()});
it(`Place-card click button is correctly`, () => {
  const {place} = mock;
  const clickHandler = jest.fn();
  const app = shallow(
      <PlaceCard
        cardInfo={place}
        onClick={clickHandler} />
  );
  const titleLink = app.find(`.place-card__name > a`);
  titleLink.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
