import React from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

function App() {
  return (
    <div className="App" style={{ padding: "2%" }}>
      <CommentBox />
      <CommentList />
    </div>
  );
}

export default App;
