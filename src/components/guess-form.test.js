import React from "react";
import { shallow, mount } from "enzyme";

import GuessForm from "./guess-form";

describe("<GuessForm />", () => {
  it("Renders without crashing", () => {
    shallow(<GuessForm />);
  });

  it("Renders input and button", () => {
    const wrapper = shallow(<GuessForm />);
    expect(wrapper.find("input").hasClass("text")).toEqual(true);
    expect(wrapper.find("button").hasClass("button")).toEqual(true);
  });

  it("Should fire the onMakeGuess callback when the form is submitted", () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onMakeGuess={callback} />);
    const value = "Foobar";
    wrapper.find('input[id="userGuess"]').instance().value = value;
    wrapper.simulate("submit");
    expect(callback).toHaveBeenCalledWith(value);
  });

  it("Should not fire onAdd if the input is empty", () => {
    const callback = jest.fn();
    const wrapper = mount(<GuessForm onAdd={callback} />);
    wrapper.simulate("submit");
    expect(callback).not.toHaveBeenCalled();
  });
});
