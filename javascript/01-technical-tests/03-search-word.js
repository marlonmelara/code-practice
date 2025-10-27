/**
Ejercicio 3: Buscar palabra
Dada una palabra, buscarla en una frase y devolver cuantas veces aparece.
La frase y la palabra deben ser parámetros de una función.
*/

// **** Solución 1
function contarPalabra(frase, palabra) {
  const palabras = frase.split(" "); // separa por espacios
  let contador = 0;

  for (let p of palabras) {
    if (p === palabra) contador++;
  }

  return contador;
}

// Prueba
console.log(contarPalabra("el gato duerme con otro gato", "gato")); // 2

// **** Solución 2
const searchWord = (phrase, word) => {
  if (typeof phrase !== "string" || typeof word !== "string") {
    console.warn("Debes ingresar una frase y una palabra no vacías");
    return 0;
  }

  // Normalizar: minúsculas, quitar acentos y caracteres no alfabéticos
  const cleanedPhrase = phrase
    .toLowerCase() // Convertir a minúsculas
    .normalize("NFD") // Descomponer acentos
    .replace(/[\u0300-\u036f]/g, "") // Eliminar los acentos
    .replace(/[^a-z0-9\s]/g, ""); // Eliminar caracteres no alfabéticos y espacios

  const cleanedWord = word
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  // Contar cuántas veces aparece la palabra en la frase
  const regex = new RegExp(`\\b${cleanedWord}\\b`, "g"); // \b asegura que sea una palabra completa
  const matches = cleanedPhrase.match(regex); // Busca todas las coincidencias

  return matches ? matches.length : 0; // Devuelve la cantidad de coincidencias o 0 si no hay coincidencias
};

// Ejemplos de uso
console.log(searchWord("La casa es grande y la casa es azul", "casa")); // 2
console.log(searchWord("La casa es grande y la casa es azul", "Casa")); // 2
console.log(
  searchWord(
    "El árbol de manzanas es grande. Ayer comí una manzana de ese árbol. Es mi árbol favorito",
    "arbol"
  )
); // 3
console.log(
  searchWord(
    "El árbol de manzanas es grande. Ayer comí una manzana de ese árbol. Es mi árbol favorito",
    "naranja"
  )
); // 0
