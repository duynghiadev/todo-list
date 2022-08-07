import { useState } from "react";
import Todo from "./Todo";
function Todos() {
  const [todos, setTodos] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [edit, setEdit] = useState([false, -1]);
  const AddTask = (e) => {
    e.preventDefault();
    console.log(!edit[0]);
    if (!edit[0]) {
      if (currentInput.trim().length !== 0) {
        setTodos((prev) => [...prev, currentInput.trim()]);
      }
      document.getElementById("input_task").value = "";
      setCurrentInput("");
    } else {
      const updateItemValue = document.getElementById("input_task").value;
      const newArr = todos.map((todo, index) => {
        if (index === edit[1]) {
          return updateItemValue;
        } else {
          return todo;
        }
      });
      setTodos(newArr);
      document.getElementById("input_task").value = "";
      setEdit([false, -1]);
    }
  };
  const RemoveTask = (id) => {
    let count = 0;
    const newArr = todos.filter((todo) => {
      if (id !== count) {
        console.log("run");
        count++;
        return true;
      } else {
        count++;
        return false;
      }
    });
    console.log(newArr);
    setTodos(newArr);
  };
  const EditTask = (id) => {
    const valueEdit = document.getElementById(id).value;
    document.getElementById("input_task").value = valueEdit;
    setEdit([true, id]);
  };
  const DoneTask = (id) => {
    const idDone = "done-" + id;
    const buttonGroupDoneId = "btn-group-" + id;
    console.log(buttonGroupDoneId);
    const notDoneId = "not-done-" + id;
    document.getElementById(idDone).classList.toggle("hidden");
    document.getElementById(buttonGroupDoneId).classList.toggle("hidden");
    document.getElementById(notDoneId).classList.toggle("hide");
  };

  return (
    <div className="container">
      <h1 className="heading">My Todo List</h1>
      <form className="task_form" onSubmit={AddTask}>
        <input
          id="input_task"
          type="text"
          onChange={(e) => {
            setCurrentInput(e.target.value);
          }}
          maxlength="23"
        />
        {edit[0] ? (
          <input type="submit" value="Save" />
        ) : (
          <input type="submit" value="Add" />
        )}
      </form>
      <div className="list">
        {todos.map((todo, index) => {
          return (
            <Todo
              taskName={todo}
              key={index}
              id={index}
              RemoveTask={RemoveTask}
              EditTask={EditTask}
              DoneTask={DoneTask}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Todos;
