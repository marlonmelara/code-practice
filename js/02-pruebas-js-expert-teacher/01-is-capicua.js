// Ejercicio 1: Números capicúa

/**
Escribe una función en JavaScript llamada isCapicua que reciba un número entero positivo y devuelva true si el número es capicúa (es decir, se lee igual de izquierda a derecha que de derecha a izquierda), o false en caso contrario. */

const isCapicua = (number) => {
  const strNum = number.toString();
  const reversed = strNum.split("").reverse().join("");
  return strNum === reversed; // true si son iguales
};

console.log(isCapicua(121)); // true
console.log(isCapicua(123)); // false
console.log(isCapicua(1221)); // true
