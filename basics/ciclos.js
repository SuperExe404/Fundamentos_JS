// Clclos de Javascript

// for
for (let i = 0; 1 < 3; i++){
    console.log(`vuelva` + 1);
}

// while 
let contador = 0;
while(contador < 3){
    console.log(`vuelva` + 1);
    contador ++;
}

// dowhile
contador = 0;
do {
    console.log(`vuelva` + contador);
    contador++;
} while (contador === 0);

// Recorrido de un String 
const name = `Peter`;
for(let i = 0; i < name.length; i++){
    console.log(name[i]);
}

// Recorrido de un array
const numbers = [1,2,3,4,5,6];
for(let i = 0; i < numbers.length; i ++){
    console.log(numbers[1]);
}

// for ... of
for(const item of numbers){
    console.log(item);
}

for(const letter of name){
    console.log(letter);
}