import React from "react";
import { mount } from "enzyme";
import CommentBox from "../CommentBox";

let wrapped;
beforeEach(() => {
  wrapped = mount(<CommentBox />);
});
afterEach(() => {
  wrapped.unmount();
});

it("has a text area", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
});
