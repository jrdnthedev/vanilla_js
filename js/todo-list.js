export default class TodoList {
  constructor(tasks) {
    this.tasks = tasks;
  }

  addTask(task) {
    if (task.length) {
      this.tasks.push(task);
      this.render();
    }
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
    this.render();
  }

  render = () => {
    const container = document.getElementById("todolist");
    container.innerHTML = "";
    this.tasks.forEach((task, index) => {
      const el = document.createElement("li");
      const close = document.createElement("button");
      close.addEventListener("click", () => this.removeTask(index));
      el.innerText = task;
      close.innerText = "X";
      el.appendChild(close);
      container.appendChild(el);
    });
  };
}
