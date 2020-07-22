import React, { useState } from "react";
import * as actions from "../redux config/actions";
import { useDispatch } from "react-redux";

const CommentBox = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const hundleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.saveComment(comment));
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a comment</h4>
      <textarea
        value={comment}
        onChange={hundleChange}
        cols="30"
        rows="10"
      ></textarea>
      <div>
        <button>submit</button>
      </div>
    </form>
  );
};

export default CommentBox;
