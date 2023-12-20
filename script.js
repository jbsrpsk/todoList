document.addEventListener("DOMContentLoaded",function(){
    let TypeBox = document.getElementById("typeBox")
    let AddBtn = document.getElementById("addBtn")
    let tasksContainer = document.querySelector(".tasks");
    let Tasks = []
    let task = ""

    AddBtn.addEventListener("click",function(){
        task = TypeBox.value
        if(task != ""){
            Tasks.push(task)
            TypeBox.value = ""
            displayTasks()
        }
        else{
            console.log("Empty task")
            alert("Empty Task")
        }
    })
    function displayTasks(){
        tasksContainer.innerHTML = "";
        Tasks.forEach(function(task,index){
            let taskDiv = document.createElement("div");
            taskDiv.classList.add("taskDiv")
            
            let taskText = document.createElement("span")
            taskText.textContent = task

            let deleteButton = document.createElement("button") 
            let iconElement = document.createElement("i")
            iconElement.classList.add("fas", "fa-x");




            deleteButton.addEventListener('click',function(){
                deleteTask(index)
            })

            deleteButton.appendChild(iconElement)
            taskDiv.appendChild(taskText)
            taskDiv.appendChild(deleteButton)
            tasksContainer.appendChild(taskDiv);
        })
    }
    function deleteTask(index){
        Tasks.splice(index,1)
        displayTasks()
        console.log("delete cklicked")
    }
}
)