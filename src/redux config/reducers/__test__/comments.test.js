import { SAVE_COMMENT } from "../../actions/types";
import commentsList from "../comments";

it("handle action of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "new comment",
  };

  const newState = commentsList([], action);

  expect(newState).toEqual(["new comment"]);
});
