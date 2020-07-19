import React, { useState } from "react";

const CommentBox = () => {
    const [comment, setComment] = useState("");
    const hundleChange = e => {
        setComment(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        setComment("");
    }
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
