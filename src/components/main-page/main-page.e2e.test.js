import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainPage from "./main-page";

Enzyme.configure({adapter: new Adapter()});
it(`Main-page click title is correctly`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<MainPage
    places={[
      `Beautiful & luxurious apartment at great location`,
      `Wood and stone place`,
      `Canal View Prinsengracht`,
      `Nice, cozy, warm big bed apartment`,
      `Wood and stone place`
    ]}
    onClick={clickHandler} />
  );

  const startButton = app.find(`.place-card__name > a`);
  startButton.forEach((node) => {
    node.simulate(`click`, {preventDefault() {}});
  });
  expect(clickHandler).toHaveBeenCalledTimes(startButton.length);

});
