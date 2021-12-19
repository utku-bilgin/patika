let addToDo = document.querySelector('#addToDo');
let listToDo = document.querySelector('#listToDo');
let inputToDo = document.querySelector('#inputToDo');
let clearToDo = document.querySelector('#clearToDo');
let liToDo = document.querySelector('li');
let iToDo = document.querySelector('i');

addToDo.addEventListener('click', function () {
    let text = document.createElement('li');
    text.classList.add("list-group-item", "fw-bolder", "mt-1");

    if (inputToDo.value == ""){
        new bootstrap.Toast(document.querySelector('#errorToast')).show();
    } else {
        listToDo.appendChild(text);
        new bootstrap.Toast(document.querySelector('#rightToast')).show();
    };

    
    
    text.innerHTML = inputToDo.value;
    inputToDo.value = "";

    text.addEventListener('click', function () {
        text.style.textDecoration = 'line-through'
        text.style.color = 'red'
    })

    clearToDo.addEventListener('click', function(){
        text.remove();
    })

    

})