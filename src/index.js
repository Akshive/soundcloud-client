import React from "react";
import ReactDOM from "react-dom";

const tracks = [{ title: "Some track" }, { title: "Some other track" }];

ReactDOM.render(
  <div>
    {tracks.map((track) => (
      <div className="track">{track.title}</div>
    ))}
  </div>,
  document.getElementById("app")
);

module.hot.accept();
