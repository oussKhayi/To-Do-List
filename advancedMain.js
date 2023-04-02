let n = 1;

function doIt(allTasks, newTask) {
  let id = "id_" + n;
  allTasks.innerHTML += `  <li id="${id}">
    <div class="input-group mb-3" >
    <button disabled class="input-group-text btn btn-secondary " >${n}</button>
    <input type="text" class="form-control" disabled value='${newTask}' >
    <button class="input-group-text btn btn-warning ms-1" id="${id}" onClick="reply_click(this.id)" >Delete</button>    
</div>
</li>`;
  n++;
}
function addTask() {
  let allTasks = document.getElementById("list");

  const newTask = document.getElementById("new-task").value;
  newTask != "" ? doIt(allTasks, newTask) : alert("The Task is empty!");

  allTasks.innerHTML.trim() != ""
    ? allTasks.classList.remove("hidden") +
      document.getElementById("removeAll").classList.remove("hidden")
    : console.log("to do list no empty");

  document.getElementById("new-task").value = "";
}

function reply_click(clicked_id) {
  let isExecuted = confirm("Are you sure to delete this Task?");

  if (isExecuted == true) {
    let allTasks = document.getElementById("list");
    document.getElementById(clicked_id).remove();

    allTasks.innerHTML.trim() != ""
      ? allTasks.classList.remove("hidden")
      : allTasks.classList.add("hidden");
    console.log("the task Deleted successfully");
  } else {
    console.log("removing the task has been canceled");
  }
}

function removeAll() {
  let isExecuted = confirm("Are you sure to delete All Tasks?");

  if (isExecuted == true) {
    document.getElementById("list").innerHTML = "";
    console.log("All tasks Deleted successfully");
    document.getElementById("list").classList.add("hidden");
    document.getElementById("removeAll").classList.add("hidden");
    n = 1;
  } else {
    console.log("removing the tasks has been canceled");
  }
}
