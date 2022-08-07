function Todo({ taskName, id, RemoveTask, EditTask, DoneTask }) {
  return (
    <div className="todo">
      <input type="text" value={taskName} id={id} />
      <div id={"btn-group-" + id} className="btn-group">
        <button onClick={() => RemoveTask(id)}>
          <i className="fa-solid fa-trash remove_icon"></i>
        </button>
        <button onClick={() => EditTask(id)}>
          <i className="fa-solid fa-pen-to-square edit_icon"></i>
        </button>
        <button onClick={() => DoneTask(id)}>
          <i className="fa-solid fa-circle-check done_icon"  ></i>
        </button>
      </div>

      <hr className="hidden" id={"done-" + id}></hr>
      
      <button
        onClick={() => DoneTask(id)}
        id={"not-done-" +  id }
        className="hide"
      >
        Not done
      </button>
    </div>
  );
}
export default Todo;
