// Funciones en JavaScript
/*
Function nombre(params){
    body function
}
const nombre = function (params){
    body function
}
*/
// Funciones sin parámetros, y sin retorno
function saludo(){
    console.log('Helloooo!')
}
saludo();

//Funciones con parámetros sin retorno 
const saludaA = function(name){
    console.log('Hola ' + name);
}
saludaA('Clark Kent');

// Funciones con parámetros y con retorno
const fact = function (num) {
    if (num === 0) {
        return 1;
    }
    return fact(num - 1) * num;
}
const result = fact(5);
console.log(result);

// Arrow Functions o funciones de flecha
// Sin parametros y sin retorno
const saludaEnChino = () => {
    console.log('Ni Hao')
}
saludaEnChino();

// con 1 parametro sin retorno 
const mayuscula = (word) =>{
    console.log(word.toUpperCase());
}
mayuscula('hola');

const minuscula = word => {
    console.log(word.toLowerCase());
}
minuscula('HELLO');

// Dos o más parametros y con retorno 
const fullName = (firstName, lastname) => {
    return firstName + ' ' + lastname;
}
const nombreCompleto = fullName('Bruce','Wayne');
console.log(nombreCompleto);

// Si el retun es la única línea se puede simplificar 
const duplica = num => num * 2;
const doble = duplica(36); 
console.log(doble);

/* function duplica(num){
    return num * 2;
}
*/

// Funciones con parametros opcionales
const WelcomeToMexico = (user = 'Invitado') => {
    console.log(`Bienvenido a Mexico ${ user }`);
}

WelcomeToMexico();
WelcomeToMexico("Batman");

// Parametros con nombre
const WelcomeToUTT = (user = 'Invitado', city = 'Mexico') => {
    console.log(`Bienvenido ${ user } de ${ city }`)
}

WelcomeToUTT();
WelcomeToUTT('Bruce Wayne', 'Gotham');
WelcomeToUTT(city = 'Metropolis', user = 'Superman');