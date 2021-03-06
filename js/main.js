let content = document.querySelector("ol");

const projectList = [
  {
    label: "Week 1 Notes",
    url: "week1/index.html",
  },
  {
    label: "Week 2 Notes",
    url: "week2/index.html",
  },
  {
    label: "Week 3 Notes",
    url: "week3/index.html",
  },
  {
    label: "Week 4 Notes",
    url: "week4/index.html",
  },
  {
    label: "Week 5 Notes",
    url: "week5/index.html",
  },
  {
    label: "Week 6 challenge",
    url: "todo/todo.html",
  },
  {
    label: "Week 7 Notes",
    url: "week7/index.html",
  },
  {
    label: "Week 8 Notes",
    url: "week8/index.html",
  },
  {
    label: "Week 9 Notes",
    url: "week9/index.html",
  },
  {
    label: "Week 10 Notes",
    url: "week10/index.html",
  },
  {
    label: "Project: HP App",
    url: "hp_app/index.html",
  },
];

// let projLabel = projectList[0].label;
// let projUrl = projectList[0].url;

projectList.forEach(addProject);

function addProject(item) {
  let projLabel = item.label;
  let projUrl = item.url;

  let li = document.createElement("li");
  let link = document.createElement("a");
  let linkText = document.createTextNode(projUrl);
  content.appendChild(li);

  link.setAttribute("href", projUrl);
  link.appendChild(linkText);
  console.log(link);

  li.textContent = projLabel + " - ";
  li.appendChild(link);
}
