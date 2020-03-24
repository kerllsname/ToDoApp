import React from "react";
import ToDoListItem from "./ToDoListItem";
import "./ToDoList.css";

const ToDoList = ({ todoes }) => {
  const elements = todoes.map(item => {
    return (
      <li key={item.id} className="list-group-item">
        <ToDoListItem {...item} />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default ToDoList;
