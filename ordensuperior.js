// Funciones de orden superior
// Higs Order Functions
// Funciones que reciben como parametros otras funciones
// Mas funciones 

const myFunctionWithGigName = () => {
    console.log(`Funcion Inicial`);
}

console.log(myFunctionWithGigName);
myFunctionWithGigName();

const myFun = myFunctionWithGigName;
myFun();

const funOne = () => {
    console.log(`Ejecuta Funcion Uno`);
}

const funTwo = (nombre) => {
    console.log(`hi!` + nombre);
    console.log(`Ejecuta Funcion Dos`);
}

funOne();
funTwo(`Frank`);

const funThree = (otherFunction) => {
    console.log(`Inicia Funcion Tres`);
    otherFunction();
    console.log(`Termina Funcion Tres`);
}

funThree(funOne);
funThree(() => console.log('Funcion de flechas'))