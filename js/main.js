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
  link.appendChild(linkText)
  console.log(link)

  li.textContent = projLabel + " - ";
  li.appendChild(link);
  
  
}
