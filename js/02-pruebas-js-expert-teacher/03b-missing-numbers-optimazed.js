// Ejercicio 3: Números faltantes

/**
Escribe una función llamada missingNumbers que reciba un array de números enteros ordenados de menor a mayor (sin duplicados), y devuelva un nuevo array con los números que faltan en la secuencia.
*/

const missingNumbers = (arr) => {
  const missNumbers = [];
  const lastNumber = arr[arr.length - 1];
  const firstNumber = arr[0];
  const numSet = new Set(arr);

  for (let i = firstNumber; i <= lastNumber; i++) {
    if (!numSet.has(i)) {
      missNumbers.push(i);
    }
  }
  return missNumbers;
};

console.log(missingNumbers([1, 2, 3, 6, 7, 10])); // [4, 5, 8, 9]
console.log(missingNumbers([5, 6, 9])); // [7, 8]
console.log(missingNumbers([0, 1, 6, 9])); // [2, 3, 4, 5, 7, 8]
console.log(missingNumbers([-1, 5, 6, 9])); // [0, 1, 2, 3, 4, 7, 8]

/**
Con esta modificación, la búsqueda usando Set.has() tiene una complejidad de tiempo O(1), lo que hace que la solución completa tenga una complejidad de O(n + r), donde r es el rango entre el primer y último número.
*/
