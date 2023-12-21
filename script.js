document.addEventListener("DOMContentLoaded",function(){
    let TypeBox = document.getElementById("typeBox")
    let AddBtn = document.getElementById("addBtn")
    let tasksContainer = document.querySelector(".tasks");
    let messageEl = document.getElementById("message")
    let Tasks = []
    let completedTasks = []
    let task = ""


    AddBtn.addEventListener("click",function(){
        task = TypeBox.value
        if(task != ""){
            Tasks.push({name:task,completed:false,delete:false})
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
                taskText.textContent = task.name
                
                let buttonsDiv = document.createElement("div")
                buttonsDiv.classList.add("buttonsDiv")

                let deleteButton = document.createElement("button") 
                let checkButton = document.createElement("button") 
                checkButton.classList.add("checkButton")


                let iconElement1 = document.createElement("i")
                iconElement1.classList.add("fa-solid", "fa-trash-can");

                let iconElement2 = document.createElement("i")
                iconElement2.classList.add("fa-solid","fa-check")
    
                checkButton.addEventListener('click',function(){
                    toggleTaskStatus(index)
                    displayTasks()
                })

                deleteButton.addEventListener('click',function(){
                    toggleDeleteStatus(index)
                    displayTasks()
                })


                if(Tasks[index].completed){
                    taskDiv.style.borderBottomColor = '#4CB84C'
                }

                if(Tasks[index].delete){
                    taskDiv.style.borderBottomColor = 'crimson'
                }

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
        console.log("delete clicked")
    }
    function completeTask(index){
        completedTasks.push()
    }
    function toggleTaskStatus(index){
        if(Tasks[index].delete){
            Tasks[index].delete = !Tasks[index].delete
            console.log("delete is falsed")
        }
        else{
            Tasks[index].completed = !Tasks[index].completed
            console.log("toggled")
            console.log(Tasks[index])
        }
    }
    function toggleDeleteStatus(index){
        if(Tasks[index].completed){
            Tasks[index].completed= !Tasks[index].completed
            console.log("completed is falsed")
        }
        else{
            Tasks[index].delete = !Tasks[index].delete
            console.log("toggled")
            console.log(Tasks[index])
        }
    }

}
)
