// Ejercicio 3: Números faltantes

/**
Escribe una función llamada missingNumbers que reciba un array de números enteros ordenados de menor a mayor (sin duplicados), y devuelva un nuevo array con los números que faltan en la secuencia.
*/

const missingNumbers = (arr) => {
  const missNumbers = [];
  const lastNumbers = arr[arr.length - 1]; //el último número del array
  const firstNumber = arr[0]; // el primer número del array

  for (let i = firstNumber; i <= lastNumbers; i++) {
    if (!arr.includes(i)) {
      //si el número no está en el array
      missNumbers.push(i); // lo añadimos al array de números faltantes
    }
  }

  return missNumbers;
};

console.log(missingNumbers([1, 2, 3, 6, 7, 10])); // [4, 5, 8, 9]
console.log(missingNumbers([5, 6, 9])); // [7, 8]
console.log(missingNumbers([0, 1, 6, 9])); // [2, 3, 4, 5, 7, 8]
console.log(missingNumbers([-1, 5, 6, 9])); // [0, 1, 2, 3, 4, 7, 8]
