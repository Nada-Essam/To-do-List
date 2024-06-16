let btn = document.getElementById("btn");
let input = document.getElementById("input");
let arr = [];
let mood = "create";
let tmp;

if (localStorage.getItem("localItems") != null) {
  arr = JSON.parse(localStorage.getItem("localItems"));
  displayTasks();
}

//add task
btn.addEventListener("click", function () {
  //  var t={
  //   text:input.value
  //  }
  if(mood==="create"){
  if (input.value === "") {
    window.alert("Please enter a task");
  } else {
    arr.push(input.value);
  }}
  else{
     arr[tmp]=input.value;
     mood="create";
     btn.innerText="Add Task";
  }

  localStorage.setItem("localItems", JSON.stringify(arr));
  input.value = "";

  displayTasks();
});

//display task
function displayTasks() {
  let taskList = document.querySelector(".list");
  taskList.innerHTML = "<h4>Tasks</h4>";
  arr.forEach((task, index) => {
    let taskElement = document.createElement("div");
    taskElement.classList.add("task");
    taskElement.innerHTML = `
      <div class="task-title">${task}</div>
      <div>
        <button class="edit" onclick="editTask(${index})">Edit</button>
        <button class="delete" onclick="deleteTask(${index}) ">Delete</button>
      </div>`;
    taskList.appendChild(taskElement);
  });
}

//delete task
function deleteTask(index) {
  arr.splice(index, 1);
  localStorage.setItem("localItems", JSON.stringify(arr));
  displayTasks();
}

//edit and update
function editTask(index) {
input.value = arr[index];
btn.innerText = "Update";
mood = "update";
tmp=index;
}
