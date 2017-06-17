// var tasks = document.getElementById('taskDescription')
//
// window.onload = function(){
//   var divElement = document.createElement("div")
//   var ul = document.createElement("ul")
//
//   for (var i=0; i<tasks.length; i++){
//   console.log(tasks[i])
//   var li = document.createElement("li")
//
//   li.innerHTML = tasks[i]
//
//   ul.appendChild(li)
//
//   divElement.appendChild(ul)
// }
// }


var tasks = [];

function submitButton(){
  event.preventDefault();
  tasks.push(document.getElementById("description").value);
}

// tasks.push(document.getElementById("description"));


// function todoList(){
//   tasks.push(document.getElementById("difficulty"));
//   console.log(tasks);
// }
