import React from "react";
import { shallow, mount } from "enzyme";

import GuessCount from "./guess-count";

describe("<GuessCount />", () => {
  it("Renders without crashing", () => {
    shallow(<GuessCount />);
  });

  it("Renders singular guess count correctly", () => {
    const count = 1;
    const text = "You've made 1 guess!";

    const wrapper = shallow(<GuessCount guessCount={count} />);
    expect(wrapper.text()).toEqual(text);
  });

  it("Renders plural guess count correctly", () => {
    const count = 2;
    const text = "You've made 2 guesses!";

    const wrapper = shallow(<GuessCount guessCount={count} />);
    expect(wrapper.text()).toEqual(text);
  });
});
