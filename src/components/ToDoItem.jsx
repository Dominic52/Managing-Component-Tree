import React from "react";

function ToDoItem(props) {
  function handleClick() {
    props.onChecked(props.id);
  }

  return <li onClick={handleClick}>{props.text}</li>;
}

export default ToDoItem;
