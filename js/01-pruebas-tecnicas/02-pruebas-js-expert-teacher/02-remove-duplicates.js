// Ejercicio 2: Eliminar duplicados

/**
Escribe una función llamada removeDuplicates que reciba un array de números y retorne un nuevo array con los elementos únicos, es decir, sin duplicados. Debe mantener el orden original del primer elemento único encontrado. */

const removeDuplicates = (arr) => {
  const noDuplicates = []; // Aquí guardamos los elementos únicos

  for (const number of arr) {
    // Verificamos si ya existe en noDuplicates
    if (!noDuplicates.includes(number)) {
      // Si NO está, lo agregamos
      noDuplicates.push(number);
    }
  }

  return noDuplicates;
};

console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([-1, 0, 2, 8, 10, 0, -2, -1])); // [-1, 0, 2, 8, 10, -2]
