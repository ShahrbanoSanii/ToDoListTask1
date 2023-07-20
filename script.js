const addInput = document.querySelector("#content");
const addBtn = document.querySelector(".addbtn");
const divList = document.querySelector(".ToDo");
const todoList = document.querySelector(".todolist");
const deleteAllBtn = document.querySelector(".footer button");

function addLists(){
    if (addInput.value === '') {
        alert('Enter the list name please!!!');
      } else {
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addInput.value;
    addInput.value = '';
    ul.appendChild(li);
}
}
addBtn.addEventListener('click', () => {
    addLists();
});
addInput.addEventListener('keyup', (event) => {
    if(event.which === 13) {
      addLists();
    }
  });
  function remove(e){
    e.parentNode.removeChild(e);
  }
function showTasks(){
  let getLocalStorageData = localStorage.getItem("New Todo");
    if(getLocalStorageData == null){
      listArray = [];
    }else{
      listArray = JSON.parse(getLocalStorageData); 
    }
  const pendingTasksNumb = document.querySelector(".pendingTasks");
  pendingTasksNumb.textContent = listArray.length; 
  if(listArray.length > 0){ 
    deleteAllBtn.classList.add("active"); 
  }else{
    deleteAllBtn.classList.remove("active"); 
  }
  let newLiTag = "";
  listArray.forEach((element, index) => {
    newLiTag += `<li>${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
  });
  todoList.innerHTML = newLiTag; 
  addInput.value = ""; 
} 

deleteAllBtn.onclick = ()=>{
  let getLocalStorageData = localStorage.getItem("New Todo"); 
  if(getLocalStorageData == null){ 
    listArray = []; 
  }else{
    listArray = JSON.parse(getLocalStorageData);  
    listArray = []; 
  }
  localStorage.setItem("New Todo", JSON.stringify(listArray)); 
  showTasks(); 
}
