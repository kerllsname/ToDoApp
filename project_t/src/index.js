import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./components/ToDoList";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";

const App = () => {
  const toDoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Build App", important: true, id: 2 },
    { label: "Drink Tea  ", important: false, id: 3 }
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList todoes={toDoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
