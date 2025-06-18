// EJERCICIO 00-SINTAXIS, VARIABLES, TIPOS DE DATOS Y HOLA MUNDO

// Web oficial (documentación) del lenguaje: https://developer.mozilla.org/es/docs/Web/JavaScript
// MDN Web Docs es la fuente de documentación más completa y confiable para JavaScript.

// Este es un comentario de una sola línea en JavaScript.
// Se usa para añadir notas o deshabilitar código temporalmente.

/**
 * Este es un comentario de varias líneas en JavaScript.
 * Es útil para bloques de texto más extensos, como la descripción
 * de funciones o archivos completos.
 */

// Variables en JavaScript
// JavaScript es un lenguaje de tipado dinámico, no necesitas declarar
// explícitamente el tipo de dato de una variable.
let myVariable = "Soy una variable con let";
// 'let' permite reasignar el valor y tiene un ámbito de bloque.

var myOldVariable = 10;
// 'var' es una forma más antigua de declarar variables.
// Tiene un ámbito de función o global y puede causar 'hoisting'.
// Se desaconseja su uso en código moderno a favor de 'let' y 'const'.

const MY_CONSTANT = "Soy una constante con const";
// 'const' declara una constante cuyo valor no puede ser reasignado.
// Su ámbito es de bloque y es ideal para valores que no cambiarán.

// Tipos de datos primitivos (Primitive Data Types)
// JavaScript tiene varios tipos de datos primitivos incorporados.

// Tipo de dato 'string' (cadena de texto)
let myString = "Soy un string con comillas dobles";
let myOtherString = "También soy un string con comillas simples";
let myTemplateString = `Puedo ${myVariable} y expresiones, soy un template string.`;
// Los template strings (backticks ``) permiten incrustar expresiones `${}`
// y manejar saltos de línea sin caracteres especiales.

// Tipo de dato 'number' (número entero o de punto flotante)
let myInt = 1;
let myFloat = 1.0;
let myNegativeNumber = -5;
let myScientificNumber = 1.2e-3; // Notación científica
// JavaScript no diferencia entre enteros y flotantes a nivel de tipo;
// ambos son 'number'.

// Tipo de dato 'boolean' (booleano)
// Representa valores de verdad: true o false.
let myBooleanTrue = true;
let myBooleanFalse = false;

// Tipo de dato 'null'
// Representa la ausencia intencional de cualquier valor o un valor desconocido.
let myNullValue = null;

// Tipo de dato 'undefined'
// Indica que una variable ha sido declarada, pero aún no se le ha asignado un valor.
let myUndefinedValue; // Automáticamente se inicializa como undefined.

// Tipo de dato 'symbol' (símbolo) - Introducido en ES6
// Los símbolos son valores únicos e inmutables que se pueden usar
// como identificadores de propiedades de objetos.
let mySymbol = Symbol("Descripción del símbolo");

// Tipo de dato 'BigInt' (entero de precisión arbitraria) - Introducido en ES2020
// Permite representar números enteros mucho más grandes que los que 'number' puede manejar.
let myBigInt = 1234567890123456789012345678901234567890n;
// Se define añadiendo 'n' al final del número.

// Imprimir mensajes y variables en la consola
// La función 'console.log()' se usa para mostrar información en la consola del navegador
// o en un entorno de ejecución de JavaScript como Node.js.
console.log("¡Hola, JavaScript!");

// Concatenación de cadenas y uso de template strings (la forma moderna y recomendada)
console.log("Mi variable con let es: " + myVariable); // Concatenación básica con '+'
console.log(`Mi constante es: ${MY_CONSTANT}`); // Uso de template string para interpolación
console.log(`Mi variable var es: ${myOldVariable}`);

// Imprimir el tipo de dato de las variables
// El operador 'typeof' devuelve una cadena indicando el tipo del operando.
console.log(`El tipo de 'myString' es: ${typeof myString}`);
console.log(`El tipo de 'myInt' es: ${typeof myInt}`);
console.log(`El tipo de 'myFloat' es: ${typeof myFloat}`);
console.log(`El tipo de 'myBooleanTrue' es: ${typeof myBooleanTrue}`);
console.log(`El tipo de 'myNullValue' es: ${typeof myNullValue}`); // ¡Ojo! typeof null es 'object' (considerado un bug histórico)
console.log(`El tipo de 'myUndefinedValue' es: ${typeof myUndefinedValue}`);
console.log(`El tipo de 'mySymbol' es: ${typeof mySymbol}`);
console.log(`El tipo de 'myBigInt' es: ${typeof myBigInt}`);

// Operaciones básicas con variables
console.log(`Suma de números: ${myInt + myOldVariable}`);
console.log(`Multiplicación de flotantes: ${myFloat * myScientificNumber}`);
console.log(`Negación de un booleano: ${!myBooleanTrue}`); // El operador '!' niega un valor booleano.
