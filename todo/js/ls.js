function setLocalStorage(list) {
  localStorage.setItem(list, JSON.stringify(list));
}

function getLocalStorage(list, template) {
    // read previous tasks. If no tasks were found, start with an empty list
    let savedTasks = JSON.parse(localStorage.getItem(list)) || [];
      // add UI elements for any saved task
    savedTasks.forEach(template);
}


//   