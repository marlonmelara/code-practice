// Ejercicio 1: Tabla de multiplicar
// Crear una función que reciba un número y devuelva su tabla de multiplicar

// Función que genera una tabla de multiplicar como un array de strings
const multiplicationTable = (number) => {
  let title = `# Tabla del ${number} #`;
  console.log(title);

  for (let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} x ${i} = ${result}`);
  }
};

multiplicationTable(2);

// Solución del curso
function tablaDeMultiplicar(numero) {
  let resultado = `# Tabla del ${numero} #\n`;
  for (let i = 1; i <= 10; i++) {
    let multiplicacion = i * numero;
    resultado += `${i} x ${numero} = ${multiplicacion} \n`;
  }

  return resultado;
}

console.log(tablaDeMultiplicar(5));

// Genera una tabla de multiplicar hasta un límite dado (por defecto 10) - Propuesta de chatGPT
const generateMultiplicationTable = (number, limit = 10) => {
  const table = [];

  for (let i = 1; i <= limit; i++) {
    const result = i * number;
    table.push(`${number} x ${i} = ${result}`);
  }

  return table;
};

// Ejemplo de uso
const tableOf3 = generateMultiplicationTable(3, 12);
console.log(tableOf3);
