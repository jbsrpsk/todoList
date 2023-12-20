document.addEventListener("DOMContentLoaded",function(){
    let TypeBox = document.getElementById("typeBox")
    let Para = document.getElementById("para")
    let AddBtn = document.getElementById("addBtn")
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
        }
    })
    function displayTasks(){
        let results = ""
        Tasks.forEach(function (task, index) {
           results += (`${task}<br>`);
        });
        Para.innerHTML = results
    }
}
)