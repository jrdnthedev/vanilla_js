import Accordion from "./accordion.js";
import Form from "./form.js";
import DataTable from "./data-table.js";
import TodoList from "./todo-list.js";

(function () {
  console.log("running");
  //Event hanlders
  const submitBtn = document.getElementById("submitBtn");
  const accordionBtns = document.querySelectorAll(".tabpanel button");
  const addBtn = document.getElementById("add-task-btn");
  //
  const accordion = new Accordion("Accordion-test");
  const form = new Form("form");
  const table = new DataTable();
  const todo = new TodoList([]);

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form.submitForm();
  });

  accordionBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      accordion.togglePanel(e);
    });
  });

  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const taskText = document.getElementById('task-input');
    todo.addTask(taskText.value);
    taskText.value = '';
  })
})();
