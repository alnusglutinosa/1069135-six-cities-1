import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";

Enzyme.configure({adapter: new Adapter()});
it(`Place-card click button is correctly`, () => {
  const clickHandler = jest.fn();
  const app = shallow(
      <PlaceCard
        title={`Beautiful & luxurious apartment at great location`}
        onClick={clickHandler} />
  );
  const titleLink = app.find(`.place-card__name > a`);
  titleLink.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
