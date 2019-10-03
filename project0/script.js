
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const container = document.querySelector('.container')
  
  let todoContainer = document.createElement('div')
  todoContainer.setAttribute('class', classNames.TODO_ITEM)

  //Add input text
  let input = document.createElement('input')
  input.setAttribute('class', classNames.TODO_TEXT)
  input.setAttribute('id', classNames.TODO_TEXT)
  input.setAttribute('placeholder', 'Here goes your task')
  todoContainer.appendChild(input)

  //Add save button
  let button = document.createElement('button')
  button.setAttribute('onclick', 'addTodo()')
  button.innerText = "Save"
  todoContainer.appendChild(button)

  container.insertBefore(todoContainer, list)  
}

function addTodo() {
  let input = document.getElementById(classNames.TODO_TEXT)
  let todoContainer = input.parentNode

  if(!input.value){ return alert('No input!:(')}

    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.setAttribute('class', classNames.TODO_CHECKBOX)
    checkbox.setAttribute('onchange', 'count()')

    let item = document.createElement('li')
    item.appendChild(checkbox)
    item.innerHTML = item.innerHTML + input.value

    let deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', classNames.TODO_DELETE)
    deleteButton.setAttribute('onclick', 'deleteTodo(this)')
    deleteButton.innerHTML = "&times;"
    item.appendChild(deleteButton)

    list.appendChild(item)

    todoContainer.parentNode.removeChild(todoContainer)
    alert('New task added to the list!')
    count()
}

function count() {
  let tasks = document.querySelectorAll('.' + classNames.TODO_CHECKBOX)
  let checked = 0

  itemCountSpan.innerHTML = tasks.length

  tasks.forEach(function(task) {
    if(task.checked) {
      checked++
    }
  })

  uncheckedCountSpan.innerHTML = tasks.length - checked
}

function deleteTodo(elem) {
  if (!confirm('Are you sure you want to delete this task?:/')){ 
  }
  let task = elem.parentNode
  task.parentNode.removeChild(task)
  count()
}

$('#tit').fadeIn(1500);