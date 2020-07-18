import React from "react";
import ReactDom from "react-dom";
import App from "../App";

it("shows a comment box", () => {

  const div = document.createElement("div"); // create HTML div

  ReactDom.render(<App />, div); // render app component

  expect(div.innerHTML).toContain('Comment Box'); // our test

  ReactDom.unmountComponentAtNode(div);  // clear memory

});
