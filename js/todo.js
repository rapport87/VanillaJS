const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

let toDoArr = [];

const TODOKEY = "todo"

/*

    3.삭제시 HTML과 배열이 둘다 삭제되게끔 작성

*/

function saveTodo(toDoArr){
    let strArr = JSON.stringify(toDoArr); 
    localStorage.setItem(TODOKEY, strArr);
}

function delToDo(event){
    event.preventDefault();
    const li = event.target.parentElement;
    toDoArr = toDoArr.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveTodo(toDoArr);
}


function paintToDoList(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");

    li.id = newTodo.id;
    span.innerText = newTodo.text;
    li.appendChild(span);
    btn.innerText = "❌";
    btn.addEventListener("click", delToDo);
    li.appendChild(btn);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const toDoId = Date.now();
    const newTodo = {id:toDoId, text:toDoInput.value};
    toDoArr.push({id:toDoId,text:toDoInput.value});
    toDoInput.value = "";
    paintToDoList(newTodo);
    saveTodo(toDoArr);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

  if (localStorage.getItem(TODOKEY) !== null){
     toDoArr = JSON.parse(localStorage.getItem(TODOKEY));
     toDoArr.forEach(paintToDoList);
  }



// JSON.stringify => javascript object를  String 형태로 변환

// JSON.parse => JSON String 형태의 데이터를 Object 형태로 변환