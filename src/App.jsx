import "./App.css";
import React from "react";

function App() {
  const [content, setContent] = React.useState("");

  return (
    <div className="App">
      <div className="bar">Editor</div>
      <textarea
        id="editor"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        autoFocus
      ></textarea>
      <div id="preview">{content}</div>
    </div>
  );
}

export default App;
