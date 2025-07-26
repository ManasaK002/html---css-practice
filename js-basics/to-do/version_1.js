const todolist = [ ];

function dispTodo(){
  let todolistHTML = '';

  for(let i=0; i<todolist.length; i++){
  const todoObject = todolist[i];
  const name = todoObject.name || '';
  const dueDate = todoObject.dueDate || '';
  //const { name , dueDate} = todoObject;
  const html = `
    <p>
      ${name} ${dueDate} 
      <button onclick="
        todolist.splice(${i}, 1);
        dispTodo();
      ">Delete</button>
    </p>
  `;
  todolistHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todolistHTML;
}
function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;

  todolist.push({ name, dueDate });;
  
  inputElement.value = '';

  dispTodo();
}

  