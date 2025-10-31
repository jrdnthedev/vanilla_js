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
  const tabledata = [
    {
      id: 1,
      firstname: 'james',
      lastname: 'collins',
      email: 'test@example.com',
      tel: '416-567-9078'
    },
    {
      id: 2,
      firstname: 'sam',
      lastname: 'hutchinson',
      email: 'test@example.com',
      tel: '416-321-9543'
    },
    {
      id: 3,
      firstname: 'tami',
      lastname: 'okocha',
      email: 'test@example.com',
      tel: '416-213-3675'
    },
    {
      id: 4,
      firstname: 'broderick',
      lastname: 'jone',
      email: 'test@example.com',
      tel: '647-843-1245'
    },
    {
      id: 5,
      firstname: 'jane',
      lastname: 'jones',
      email: 'test@example.com',
      tel: '905-477-5284'
    }
  ]
  const accordion = new Accordion("Accordion-test");
  const form = new Form("form");
  const table = new DataTable(tabledata,'table');
  const todo = new TodoList([]);

  table.render();
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
  });
})();
