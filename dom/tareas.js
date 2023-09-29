const inputTarea = document.querySelector('#inputTarea');
const tareas = document.querySelector('#tareas');
const btnTarea = document.querySelector('#btnTarea');

function createTarea(message){
    /*
    <div class="alert alert-primary" role="alert">
         A simple primary alert—check it out!
    </div>
    */ 
   const tarea = document.createElement('div');
   tarea.classList.add('alert');
   tarea.classList.add('alert-primary');
   tarea.setAttribute('role','alert');
   tarea.innerText = message;
   return tarea;
}

function addTarea(){
    const data = inputTarea.value;
    if(data){
        const tarea = createTarea(data);
        tareas.appendChild(tarea);
        inputTarea.value = '';
    }
}
btnTarea.addEventListener('click', addTarea);

