// Add Task
var addBtn = document.getElementById("addTask");
addBtn.addEventListener("click", addTask);

function addTask(){
	var inputValue = document.getElementById("taskInput").value;
  	if (inputValue.trim() === "") {
    	alert("Please enter a task!");
    	return;
  	}
  	var taskList = `<li class="task-list-item">
						<label class="task-list-item-label">
							<input type="checkbox"> <span>${inputValue}</span>
						</label> 
						<span title="Delete Task" class="delete-btn"></span>
					</li>`;

	document.getElementById("taskList").innerHTML += taskList;
  	document.getElementById("taskInput").value = "";
  	// Update Task Count
  	updateTaskCount();
  	// Invoke Delete Function
  	deleteFunction();
}

// Delete Task
function deleteFunction(){
	var deleteBtn = document.querySelectorAll(".delete-btn");
	deleteBtn.forEach(function (i) {
		i.addEventListener("click", function(){
			var listItem = this.parentNode;
		  	listItem.parentNode.removeChild(listItem);
		  	// Update Task Count
		  	updateTaskCount();
		});
	});
}

// Task Count
function updateTaskCount() {
  var totalTasks = document.getElementById("taskList").getElementsByTagName("li").length;
  if(totalTasks != 0){
  	document.getElementById("taskCount").innerText = "Total tasks: " + totalTasks;
  }else{
  	document.getElementById("taskCount").innerText = '';
  }
  
}