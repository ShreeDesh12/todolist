const task = document.querySelector(".todo-input");
const addBtn = document.querySelector(".fa-plus-circle");
const todolist = document.querySelector(".todolist");
const fineshed = document.querySelector(".fineshed");

todolist.addEventListener("click", checkdel);




addBtn.addEventListener("click", function () {
    if(task.value != ""){
        let newli = document.createElement('li');
        newli.innerText = task.value;
        let newdiv = document.createElement('div')
        let checkBtn = document.createElement("button");
        let delBtn = document.createElement("button");
        checkBtn.innerHTML = "<i class=\"fa fa-check-square-o\" ></i>";
        checkBtn.classList.add("checkButton");
        delBtn.innerHTML = "<i class=\"fa fa-trash\"></i>";
        delBtn.classList.add("trashButton");
        newdiv.appendChild(newli);
        newdiv.appendChild(checkBtn);
        newdiv.appendChild(delBtn);
        todolist.appendChild(newdiv);
    }

});

function checkdel(e) {
    const item = e.target;
    if (item.classList[0] == "checkButton") {
        let listItem = item.parentElement;
        let newli = document.createElement("li");
        newli = listItem.firstChild;
        console.log(newli);
        listItem.classList.add("completed");
        listItem.addEventListener("animationend",function () {
            fineshed.appendChild(newli);
            listItem.remove();
        });

    } else if (item.classList[0] == "trashButton") {
        let listItem = item.parentElement;
        console.log(listItem);
        listItem.classList.add("drop");
        listItem.addEventListener("animationend",function () {
            listItem.remove();
        });

    }
}
