const todosList = [];

//*** Get previously saved todo list ***
// read previous tasks. If no tasks were found, start with an empty list
let savedTasks = JSON.parse(localStorage.getItem("todos")) || [];
// add UI elements for any saved task
savedTasks.forEach(todoTemplate);

//*** Create Todo ***
function todoTemplate(task) {
  const li = document.createElement("li");
  const ul = document.querySelector("ul");

  li.innerHTML = `<i class="fa-regular fa-square"></i><span>${task}</span> <i class="fa-solid fa-xmark del"></i>`;
  ul.appendChild(li);
  todosList.push(task);
}

//*** Initial Task Counter ***
let count = 0;
const tasksLeft = document.querySelector("#tasksLeft");
tasksLeft.textContent = 0;

//*** Add Todo ***
const addBtn = document.querySelector(".addBtn");

addBtn.addEventListener("click", function () {
  let inputVal = document.getElementById("todo").value;

  if (inputVal.length) {
    //if input field not empty, add todo to list
    todoTemplate(inputVal); // add todo item
    clearInput(); // clear input field
    count++; // increase tasks counter
    const tasksLeft = document.querySelector("#tasksLeft");
    tasksLeft.textContent = count;

    localStorage.setItem("todos", JSON.stringify(todosList));
  }
  return count;
});

//*** Clear input field after adding todo ***/
function clearInput() {
  document.getElementById("todo").value = "";
}

//** When task list is not empty **/
const todosEntries = document.querySelector(".todosEntries");

if (todosEntries.children) {
  //*** Remove todo ***/
  todosEntries.addEventListener("click", (e) => {
    if (e.target.classList.contains("del")) {
      //Remove entry from local storage
      const localList = JSON.parse(localStorage.getItem("todos")) || [];
      const index = localList.indexOf(
        e.target.parentElement.textContent.trim()
      );
      localList.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(localList));

      //Remove entry from html
      e.target.parentElement.remove();

      //Reduce counter of tasks left
      if (count > 0) {
        count--;
      }
      //Display counter in html
      const tasksLeft = document.querySelector("#tasksLeft");
      tasksLeft.textContent = count;
    }
  });

  //** Complete todo **
  const unchecked = document.querySelectorAll(".fa-regular");

  console.log(unchecked);

  // toggle strike-through style on completed task :: atm only works on page refresh
  unchecked.forEach((unchecked) => {
    unchecked.addEventListener("click", function (e) {
      e.target.classList.toggle("fa-square-check");
      e.target.parentElement.classList.toggle("completed");
    });
  });
}

//** FOOTER **/
const active = document.querySelector(".active");
const all = document.querySelector("#all");
const activeTask = document.querySelector("#active");
const completedTask = document.querySelector("#completed");

activeTask.addEventListener("click", function () {
  activeTask.classList.add("active");
  all.classList.remove("active");
  completedTask.classList.remove("active");

  const li = document.querySelectorAll("li.completed");
  li.forEach( li => { li.classList.add("hidden")})

  const activeLi = document.querySelectorAll("li:not(.completed")
  activeLi.forEach( activeLi => { activeLi.classList.remove("hidden")})

  document.querySelector(".tasks").textContent = activeLi.length;

});

completedTask.addEventListener("click", function () {
  completedTask.classList.add("active");
  activeTask.classList.remove("active");
  all.classList.remove("active");

  const li = document.querySelectorAll("li");
  li.forEach( li => { li.classList.add("hidden")})
  const completeLi = document.querySelectorAll("li.completed")
  completeLi.forEach(completeLi => {completeLi.classList.remove("hidden")})

  document.querySelector(".tasks").textContent = completeLi.length;
});

all.addEventListener("click", function () {
  all.classList.add("active");
  activeTask.classList.remove("active");
  completedTask.classList.remove("active");

  const li = document.querySelectorAll("li");
  li.forEach( li => { li.classList.remove("hidden")})

  document.querySelector(".tasks").textContent = li.length;
});



//** Load local storage todos and update counter */
window.onload = (event) => {
  // //** Tasks Counter on Load **/
  let liList = document
    .querySelector(".todosEntries")
    .getElementsByTagName("li");
  let liLength = liList.length;

  document.querySelector(".tasks").textContent = liLength;
};


