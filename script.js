const inputBox = document.getElementById("ipbox");
const listContainer = document.querySelector(".list");

function AddTask() {
    if(inputBox.value === '') {
        // throw new Error("Empty!");
        alert("Empty Field!");
    }
    else {
        let listcontent = document.createElement("li"); // here element name should be that exists in HTML not kuch bhi
        listcontent.innerHTML = inputBox.value;
        listContainer.appendChild(listcontent);
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        listcontent.appendChild(cross);
    }

    inputBox.value = ""; // empties the field after we have added the task
}

// adding on pressing ENTER key -- keycode - 13
inputBox.addEventListener("keyup", function(e) {
    if(e.keyCode === 13) {
        e.preventDefault();
        AddTask();
    }
})

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }

    //  removes if x clicked
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false)