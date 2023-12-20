document.addEventListener("DOMContentLoaded",function(){
    let TypeBox = document.getElementById("typeBox")
    let AddBtn = document.getElementById("addBtn")
    let tasksContainer = document.querySelector(".tasks");
    let messageEl = document.getElementById("message")
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
        messageEl.innerHTML=""
        tasksContainer.innerHTML = "";
        if(Tasks.length === 0){
            messageEl.innerHTML = "There's no current Tasks"
        }
        else{
            Tasks.forEach(function(task,index){
                let taskDiv = document.createElement("div");
                taskDiv.classList.add("taskDiv")
                
                let taskText = document.createElement("span")
                taskText.textContent = task
                
                let buttonsDiv = document.createElement("div")
                buttonsDiv.classList.add("buttonsDiv")

                let deleteButton = document.createElement("button") 
                let checkButton = document.createElement("button") 
                checkButton.classList.add("checkButton")
                let iconElement1 = document.createElement("i")
                iconElement1.classList.add("fa-solid", "fa-trash-can");

                let iconElement2 = document.createElement("i")
                iconElement2.classList.add("fa-solid","fa-check")
    
                deleteButton.addEventListener('click',function(){
                    deleteTask(index)
                })
                
                
                tasksContainer.appendChild(taskDiv);
                taskDiv.appendChild(taskText)
                deleteButton.appendChild(iconElement1)
                checkButton.appendChild(iconElement2)
                buttonsDiv.appendChild(checkButton)
                buttonsDiv.appendChild(deleteButton)
                taskDiv.appendChild(buttonsDiv)
                
            })
        }
       
    }
    function deleteTask(index){
        Tasks.splice(index,1)
        displayTasks()
        console.log("delete cklicked")
    }
}
)
