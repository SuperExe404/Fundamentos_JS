const inputTarea = document.getElementById('imputTarea');
const lsitaTareas = document.querySelector('#tareas ul');
const inputImage = document.getElementById('loadImage');
const image = document.getElementById('image');

function addImage(){
    const image = inputImage.value;
    image.src = image;
    inputImage.value = '';
}
const lista = [];

const addTarea = () => {
    const tareaData = inputTarea.value;
    lista.push(tareaData);
    inputTarea.value = '';
    showLista(); 
}
const showLista= () => {
    let listaHtml = '';
    lista.forEach(listaItem => {
        listaHtml += `<li>${ listaItem } </li>`;
    
    });
    lsitaTareas.innerHTML = listaHtml;
}