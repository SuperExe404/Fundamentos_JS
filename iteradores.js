// Iteradores de Arrays

const fruits = ['apple', 'melon', 'orange', 'cherry'];

// forEach
// Itera Arrays
fruits.forEach(function (fruit ){console.log(`Fruta ${fruit}`)});


console.log('Arrow Function')
fruits.forEach(
    (fruit) => {
        console.log(`Fruta ${ fruit}`)
    }
)

console.log('Arrow Function Simplied')
fruits.forEach(fruit =>  console.log(`Fruta ${ fruit}`));

// map()
// Regresa un array nuevo a partir del original
const fruitsMayus = fruits.map(
    fruit => {
        return fruit.toUpperCase();
    }
);
console.log(' * '.repeat(20));
console.log(fruits);
console.log(fruitsMayus);

const numbers = [1, 2, 3, 4, 5]
const squares = numbers.map(num => num * num);
console.log(numbers);
console.log(squares);

// filter()
// crea un array nuevo a partir de una condicion
const startWithA = fruits.filter(fruit => fruit.startsWith('e'));
console.log(fruits);
console.log(startWithA);

const pares = numbers.filter(num => num % 2 !== 0)
console.log(numbers);
console.log(pares);

// reduce()
// Retorn un unico valor a partir del array original
const sumatoria = numbers.reduce((a, b) => a + b);
console.log(numbers);
console.log(sumatoria);

const factorial = numbers.reduce((a, b) => a * b);
console.log(numbers);
console.log(factorial);


// some()
// Evalua cada elemento retorna true si al menos uno cumple la condicion
console.log(numbers.some(num => num >= 5));
console.log(numbers.some(num => num >= 6));

// Every()
// Regresa true si todos cumplen
console.log(numbers.every(num => num > 0));
console.log(numbers.every(num => num > 4));

console.log(fruits);
console.log(fruits.join(' _ '));