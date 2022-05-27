const todosList = [];

// let checkbox = "fa-regular fa-square";
// let checked = "fa-regular fa-square-check";
let del = "fa-solid fa-xmark del";
let checkbox = "&#9744;";
let checked = "&#9746;";

const addBtn = document.querySelector(".addBtn");

// read previous tasks. If no tasks were found, start with an empty list
let savedTasks = JSON.parse(localStorage.getItem("todos")) || [];
// add UI elements for any saved task
savedTasks.forEach(todoTemplate);

addBtn.addEventListener("click", function () {
  let inputVal = document.getElementById("todo").value;

  if (inputVal.length) {
    //if input field not empty, add todo to list
    todoTemplate(inputVal); // add todo item
    clearInput(); // clear input field
    let localSet = localStorage.setItem("todos", JSON.stringify(todosList));
  }
});

// function localStorage(list) {
//   localStorage.setItem(list, JSON.stringify(list));
//   let todosString = localStorage.getItem(list);
//   let todos = JSON.parse(todosString);
//   todos.forEach((todo) => todoTemplate(todo));
// }

// function todoTemplate() {
//   const li = document.createElement("li");
//   const inputVal = document.getElementById("todo").value;
//   const ul = document.querySelector("ul");
//   const i = document.createElement("i");

//   if (inputVal != "") {
//     //if input field not empty, add todo to list
//     i.classList.add("fa-solid", "fa-xmark", "del");
//     li.innerHTML = `${checkbox} ${task} ${i}`;
//     ul.appendChild(li);
//     todosList.push(inputVal);
//   }
// }

function todoTemplate(task) {
  const li = document.createElement("li");
  const ul = document.querySelector("ul");
  const i = document.createElement("i");

  i.classList.add("fa-solid", "fa-xmark", "del");
  li.innerHTML = `${checkbox} ${task} ${i}`;
  ul.appendChild(li);
  todosList.push(task);
}

function clearInput() {
  document.getElementById("todo").value = "";
}
