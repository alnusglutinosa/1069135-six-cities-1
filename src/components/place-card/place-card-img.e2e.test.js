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
    rating: 93
  }
};

Enzyme.configure({adapter: new Adapter()});
it(`Place-card-img click button is correctly`, () => {
  const {place} = mock;
  const clickHandler = jest.fn(() => place)
  const app = shallow(
      <PlaceCard
        cardInfo={place}
        onClickImg={clickHandler}
      />
  );

  // При клике по изображению предложения () => this.cardInfo
  // в функцию-коллбэк попадает корректная информация: активная карточка предложения.
  const imgLink = app.find(`.place-card__image-wrapper > a`);
  imgLink.simulate(`click`, {preventDefault() {}});

  expect(clickHandler.mock.results[0].value).toEqual(
    {
      id: 1,
      title: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
      mark: `Premium`,
      imgSrc: `img/apartment-01.jpg`,
      price: 120,
      priceText: `night`,
      rating: 93
    }
  );
});
