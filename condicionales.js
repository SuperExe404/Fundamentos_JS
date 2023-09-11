// Condicionales if

// if (exp){}
let age = 18;
if(age >= 18){
    console.log('Es mayor de edad');
}

// if (exp){} else {} 
if (age >= 18){
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

// if ternario (exp)? true: flase:
(age >= 18)? console.log('Es mayor'): console.log('Es menor');

// if (exp){} else if (exp) else {}
let ppt = Math.random();
if(ppt < 0.33){
    console.log('Cayo Piedra');
} else if (ppt < 0.66){
    console.log('Cayo papel');
} else {
    console.log('Cayo tijeras');
}

// switch case
let day = Math.floor(Math.random() * 7);
switch(day){
    case 0:
        console.log('Es Domingo');
        break;
    case 1:
        console.log('Es Lunes');
        break;
    case 2:
        console.log('Es Martes');
        break;
    case 3:
        console.log('Es Miercoles');
        break;
    case 4:
        console.log('Es Jueves');
        break;
    case 5:
        console.log('Es Viernes');
        break;
    default:
        console.log('Es Sabado')
}

// truthy and falsy
// '' == True
console.log('' === false)
// 'a' == True
console.log('a' === true)
// 0 == False 
console.log(0 === false)
// 1 == True
console.log(1 === true)

/*
let dato = '';
if (dato === ''){
    console.log('No hay nada');
}
if (!dato){
    console.log('No hay nada');
}
*/

let username = '';
let defaultname;

if(username){
    defaultname = username;
} else {
    defaultname = 'Extraño'
}
console.log(defaultname);

username = 'Peter';
defaultname = username || 'Extraño';
console.log(defaultname);