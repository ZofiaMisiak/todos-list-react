import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contentTrimmed = newTaskContent.trim();
    if(contentTrimmed == ""){
      return;
    }
    addNewTask(newTaskContent).trim();
    setNewTaskContent("");
  };
  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        className="form__newTask"
        placeholder="Co jest do zrobienia?"
        autofocus={true}
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  )};
  export default Form;