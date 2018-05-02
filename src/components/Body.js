import React from "react";

export default (props) => {
  const { boardName, children } = props;
  return (
    <div className="wrapper">
      <nav className="navbar">
        <h1>Trello Task Management</h1>
      </nav>
      <div className="board-name">
        <h2>{boardName}</h2>
      </div>
      { children }
    </div>
  );
};
