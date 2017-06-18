

// function submitButton(){
//   event.preventDefault();
//   var tasksArray = document.getElementById("difficulty").value;
//   for (var i=0; i<tasksArray.length; i++)
//   console.log(tasksArray);
// }

// function submitButton(){
//   event.preventDefault();
//   tasks.push(document.getElementById("description").value);
// }

var tasks = [];

function submitButton(){
  tasks.push(document.querySelector('input[type = "radio"]:checked').value);
  tasks.push(document.getElementById("description").value);
  tasks.push(document.getElementById("difficulty").value);
  event.preventDefault();
}

function todoList(){
  var parent = document.getElementById("list")
  var ul = document.createElement("ul")

  for (var i=0; i<tasks.length; i++){
    console.log(tasks)
    var list = document.createElement("li")

    ul.appendChild(list)

    parent.appendChild(ul)
  }
}
