// EJERCICIO 00-SINTAXIS, VARIABLES, TIPOS DE DATOS Y HOLA MUNDO

// Documentación oficial: https://developer.mozilla.org/es/docs/Web/JavaScript

// Comentario de una sola línea.

/**
 * Comentario de varias líneas.
 */

// Variables
let myVariable = "Soy una variable con let"; // Reasignable, ámbito de bloque.
var myOldVariable = 10; // Obsoleto, ámbito de función/global.
const MY_CONSTANT = "Soy una constante con const"; // No reasignable, ámbito de bloque.

// Tipos de datos primitivos

// string (cadena de texto)
let myString = "Soy un string";
let myTemplateString = `Puedo ${myVariable} y expresiones.`; // Permite interpolación y multilínea.

// number (número entero o de punto flotante)
let myInt = 1;
let myFloat = 1.0;

// boolean (booleano: true o false)
let myBooleanTrue = true;

// null (ausencia intencional de valor)
let myNullValue = null;

// undefined (variable declarada sin valor asignado)
let myUndefinedValue;

// symbol (valor único e inmutable, para identificadores de propiedades)
let mySymbol = Symbol("Descripción");

// BigInt (enteros de precisión arbitraria)
let myBigInt = 1234567890123456789012345678901234567890n; // Se define con 'n' al final.

// Imprimir en consola
console.log("¡Hola, JavaScript!");

// Concatenación e interpolación de cadenas
console.log("Mi variable es: " + myVariable); // Concatenación.
console.log(`Mi constante es: ${MY_CONSTANT}`); // Interpolación con template string.

// Imprimir tipo de dato
console.log(`Tipo de 'myString': ${typeof myString}`);
console.log(`Tipo de 'myNullValue': ${typeof myNullValue}`); // Nota: 'object' (bug histórico).

// Operaciones básicas
console.log(`Suma: ${myInt + myOldVariable}`);
console.log(`Negación booleana: ${!myBooleanTrue}`);
