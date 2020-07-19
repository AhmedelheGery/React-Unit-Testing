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

it('has a text area that user can type',() => {
    wrapped.find('textarea').simulate('change' , {  // fake event object
        target : { value : 'comment'}
    });
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('comment')
})
