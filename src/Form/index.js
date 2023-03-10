import { useState, useRef } from "react";
import { Button, Input, StyleForm } from "./style.css";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (newTaskContent.trim() === "") {
      return;
    }

    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyleForm onSubmit={onFormSubmit}>
      <Input
        ref ={inputRef}
        value={newTaskContent}
        onChange={({ target }) => setNewTaskContent(target.value)}
        type="text"
        placeholder="Co jest do zrobienia?"
      />
      <Button>Dodaj zadanie</Button>
    </StyleForm>
  );
};

export default Form;