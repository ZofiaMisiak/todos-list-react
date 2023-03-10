import { ListButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (

  <ListButtons>
    {tasks.length > 0 && (
      <>
        <Button
          onClick={toggleHideDone} >
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </Button>
        <Button
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
          >
          Ukończ wszystkie
        </Button>
      </>
    )}
  </ListButtons>
);

export default Buttons;