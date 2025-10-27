/**
 * Ejercicio 2: Palindrome Checker
 * Escribe una función que verifique si una palabra o frase es un palíndromo.
 * Un palíndromo es una palabra, frase o número que se lee igual hacia adelante y hacia atrás (ignorando espacios, puntuación y mayúsculas).
 * Por ejemplo, "Anita lava la tina" es un palíndromo.
 */

// Verifica si una palabra o frase es un palíndromo ignorando espacios, tildes y signos
const isPalindrome = (text) => {
  if (typeof text !== "string" || text.trim().length === 0) {
    console.warn("Debes ingresar un texto no vacío");
    return false;
  }

  // Normalizar: minúsculas, quitar acentos, espacios y caracteres no alfabéticos
  const cleaned = text
    .toLowerCase()
    .normalize("NFD") // descompone acentos
    .replace(/[\u0300-\u036f]/g, "") // elimina los acentos
    .replace(/[^a-z0-9]/g, ""); // elimina espacios y símbolos

  const reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
};

// Ejemplos de uso
console.log("¿Es un palíndromo? " + isPalindrome("Anita lava la tina")); // ¿Es un palíndromo? true
console.log("¿Es un palíndromo? " + isPalindrome("¿Acaso hubo búhos acá?")); // ¿Es un palíndromo? true
console.log("¿Es un palíndromo? " + isPalindrome("JavaScript")); // ¿Es un palíndromo? false
console.log("¿Es un palíndromo? " + isPalindrome("otTo")); // ¿Es un palíndromo? true
