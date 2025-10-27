/**
 * Encuentra los números faltantes en una secuencia de enteros ordenados
 * @param {number[]} nums - Array de números enteros ordenados (sin duplicados)
 * @return {number[]} - Array con los números faltantes en la secuencia
 */
function missingNumbers(nums) {
  // Si el array está vacío o tiene un solo elemento, no hay números faltantes
  if (nums.length <= 1) {
    return [];
  }

  const result = [];

  // Recorremos el array y buscamos los huecos en la secuencia
  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i];
    const next = nums[i + 1];

    // Comprobamos si hay un hueco entre el número actual y el siguiente
    if (next - current > 1) {
      // Añadimos todos los números entre current y next
      for (let j = current + 1; j < next; j++) {
        result.push(j);
      }
    }
  }

  return result;
}

// Ejemplos para probar
console.log(missingNumbers([1, 3, 5, 7, 9])); // [2, 4, 6, 8]
console.log(missingNumbers([1, 2, 3, 4, 5])); // []
console.log(missingNumbers([5, 10, 15])); // [6, 7, 8, 9, 11, 12, 13, 14]
console.log(missingNumbers([])); // []
console.log(missingNumbers([42])); // []
console.log(missingNumbers([1, 5])); // [2, 3, 4]
