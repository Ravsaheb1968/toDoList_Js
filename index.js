let rowCOunt = document.querySelector(".rowNum");
let taskName = document.querySelector(".taskOutput");
let startDateName = document.querySelector(".startDateOutput");
let endDateName = document.querySelector(".endDateOutput");
let taskStatusName = document.querySelector(".taskStatusOutput");
let addTask = document.querySelector(".addRow");
let row = document.querySelector(".rowVal");
let addRow = 0;

// Note Never the similar with the function name with the variable name
// function taskInput(){
//     // let taskDataInput=document.querySelector(".task").value;
//     // return taskName.innerHTML=taskDataInput;
// };
// function startDate(){
//     // let startDateInput=document.querySelector(".startDate").value;
//     // return startDateName.innerHTML=startDateInput;
// }
// function endDate(){
//     // let endkDateInput=document.querySelector(".endDate").value;
//     // return endDateName.innerHTML=endkDateInput;
// }
// function taskStatus(){
//     let taskStatusInput=document.querySelector(".taskStatus").value;
//     return taskStatusName.innerHTML=taskStatusInput;
// }

// The clearFields function used to vanished the previous value entered by the user, 
// because when user try to enter the val next time not need to cut previous text entirely.

function clearFields() {
    let taskDataInput = document.querySelector(".task");
    taskDataInput.value = null;
}

// Better solution for the code and Overcome the Problem to add or update the sigal field of record update all the on click on the add task.
function insertFn() {
    let taskDataInput = document.querySelector(".task").value;
    // taskName.innerHTML = taskDataInput;

    // For the start date add on the table
    let startDateInput = document.querySelector(".startDate").value;
    // startDateName.innerHTML = startDateInput;

    //For the end date add on the table
    let endkDateInput = document.querySelector(".endDate").value;
    // endDateName.innerHTML = endkDateInput;

    //For the status of the Assign task
    let taskStatusInput = document.querySelector(".taskStatus").value;
    // taskStatusName.innerHTML = taskStatusInput;

    const table = document.getElementById("tab").
        getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    cell1.innerHTML = addRow;
    cell2.innerHTML = taskDataInput;
    cell3.innerHTML = startDateInput;
    cell4.innerHTML = endkDateInput;
    cell5.innerHTML = taskStatusInput;
}
function addButtonClick() {

    // Row Count increment here
    // rowCOunt.innerHTML=addRow;
    // For the Task Add on the table
    if (addRow < 1) {
        let taskDataInput = document.querySelector(".task").value;
        taskName.innerHTML = taskDataInput;

        // For the start date add on the table
        let startDateInput = document.querySelector(".startDate").value;
        startDateName.innerHTML = startDateInput;

        //For the end date add on the table
        let endkDateInput = document.querySelector(".endDate").value;
        endDateName.innerHTML = endkDateInput;

        //For the status of the Assign task
        let taskStatusInput = document.querySelector(".taskStatus").value;
        taskStatusName.innerHTML = taskStatusInput;

        // return insertFn();
        clearFields();
    }
    else {
        insertFn();
        clearFields();
    }
    addRow += 1;
}
addTask.onclick = addButtonClick;
