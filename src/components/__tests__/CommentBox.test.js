import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import CommentBox from "../CommentBox";
import reducers from "../../redux config/reducers";

let wrapped;
beforeEach(() => {
  wrapped = mount(
    <Provider store={createStore(reducers, {})}>
      <CommentBox />
    </Provider>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
});

it("has a text area that user can type", () => {
  wrapped.find("textarea").simulate("change", {
    // fake event object
    target: { value: "comment" },
  });
  wrapped.update();
  expect(wrapped.find("textarea").prop("value")).toEqual("comment");
});
