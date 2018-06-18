import React from "react";
import { shallow } from "enzyme";

import GuessList from "./guess-list";

describe("<GuessList />", () => {
  const seedGuesses = [];
  beforeAll(() => {
    for (let i = 0; i < 10; i++) {
      seedGuesses.push(i.toString(10));
    }
  });

  it("Renders without crashing", () => {
    shallow(<GuessList guesses={seedGuesses} />);
  });

  it("Renders the guesses", () => {
    const wrapper = shallow(<GuessList guesses={seedGuesses} />);
    const guesses = wrapper.find("li");
    expect(guesses.length).toEqual(seedGuesses.length);
    const firstGuess = guesses.first();
    expect(firstGuess.text()).toEqual(seedGuesses[0]);
  });
});
