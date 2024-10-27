let handleDelete = (e) => {
  let task = e.target.closest(".task");
  if (task) {
    task.remove();
  }
};

let handleClick = () => {
  let task = document.getElementById("input").value;

  {
    task ? "" : alert("Please enter a task");
  }

  if (task) {
    let taskList = document.querySelector(".task-list");
    let newTask = document.createElement("div");
    newTask.className = "task";
    newTask.innerHTML = `<li>${task}</li><span class="delete">x</span>`;
    let deleteBtn = newTask.querySelector(".delete");
    deleteBtn.addEventListener("click", handleDelete);

    taskList.appendChild(newTask);
    document.getElementById("input").value = "";
  }
};

let Form = () => {
  return (
    <div className="form">
      <input
        id="input"
        type="text"
        placeholder="What do you want to do today ?"
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};

let TaskList = () => {
  return <div className="task-list"></div>;
};

function App() {
  return (
    <div className="app">
      <h1>Let's get some things done</h1>
      <Form />
      <TaskList />
    </div>
  );
}

export default App;
