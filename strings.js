let name = "Diego";
let last_name = "Montes";
let age = 18;

console.log("Soy Franchesco Birgolini, no pero si " + name + " mi apellido es " + last_name);

console.log("I'm Franchesco Birgolini, no but if " + name + " and my last name is " + last_name);
 
// Imprimir Soy Diego Montes y tengo 18 años 
// String Templates o Strings Literals
console.log(`Soy ${ name } ${ last_name} y tengo ${ age } años`);

// metodos y atibutos de String
const texto = "Este Es uN TexTo";
console.log(texto.toUpperCase);
console.log(texto.toLowerCase);
console.log(texto.charAt(5));
console.log(texto.endsWith('s'));
console.log(texto.includes('es'));
console.log(texto.length);
