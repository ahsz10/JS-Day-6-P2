//selectors
const todoInput= document.querySelector('.todo-input')
const todoBtn= document.querySelector('.todo-button')
const todoList= document.querySelector('.todo-list')

//Event listeners 

todoBtn.addEventListener("click",addNewTodo);
todoList.addEventListener("click",checkDelete)

// Functions 

function addNewTodo(event){
  event.preventDefault()
  
  const newDiv= document.createElement("div");
  newDiv.classList.add("todo");
  
  const newLi = document.createElement("li");
  newLi.innerText=todoInput.value;
  newLi.classList.add("todo-item");
  newDiv.appendChild(newLi);
  
  const checkedBtn = document.createElement("button");
  checkedBtn.innerHTML = "<i class=\"fas fa-check\"></i>";
  checkedBtn.classList.add("checkBtn");
  newDiv.appendChild(checkedBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "<i class=\"fa-solid fa-xmark\"></i>";
  deleteBtn.classList.add("deleteBtn");
  newDiv.appendChild(deleteBtn);
  
  todoList.appendChild(newDiv);
  
  todoInput.value="";
}

function checkDelete(event){
  const item = event.target;
  if(item.classList[0] === "deleteBtn"){
    const deleteItem = item.parentElement;
    deleteItem.remove();
  }
  
  if(item.classList[0] === "checkBtn"){
    const checkItem = item.parentElement;
    checkItem.classList.toggle("completed");
  }
}