import Accordion from './accordion.js';
import Form from './form.js';
import DataTable from './data-table.js';
import TodoList from './todo-list.js';

(function () {
  console.log("running");
  //Event hanlders
  const submitBtn = document.getElementById('submitBtn');
  //
  const accordion = new Accordion();
  const form = new Form('form');
  const table = new DataTable();
  const todo = new TodoList();


  submitBtn.addEventListener('click',(e) => {
    e.preventDefault();
    form.submitForm();
  });

})();
