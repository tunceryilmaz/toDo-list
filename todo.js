

/*toDo list */

const inputtext = document.querySelector("#task");
const ulDOM = document.getElementById('list');


let toDO= document.querySelector('#formInput');
toDO.addEventListener('submit', formSubmit);
let addBtn = document.querySelector("#liveToastwarning")
let addToast = document.querySelector('#liveToast')
let delToast = document.querySelector('#delToast')
function formSubmit(event) {
    event.preventDefault()
}
function setConfig() {
    list.innerHTML = localStorage.getItem("toDO")

}

console.log(inputtext);
function newElement() {
    if (inputtext.value === "") {
        toastGoster();
    } else {

        let li = document.createElement('li')
        li.innerHTML = inputtext.value;
        ulDOM.appendChild(li)
        let btn = document.createElement("button")
        btn.innerHTML = "x"
        btn.classList.add('close')
        li.appendChild(btn)
        addToastF();
    }
    inputtext.value = ""
    addLocalStorage()
}
function addLocalStorage() {
    localStorage.setItem("toDO", list.innerHTML)
}

ulDOM.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        addLocalStorage()
    } else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        delToastF ();
        addLocalStorage()
    }
}, false);

/* toast kısmı başlangıç */

let toastGoster = () => {
    var show = new bootstrap.Toast(addBtn)
    show.show()
}
let addToastF = () => {
    var goster = new bootstrap.Toast(addToast)
    goster.show()
}
let delToastF = () => {
    var del = new bootstrap.Toast(delToast)
    del.show()
}





 

