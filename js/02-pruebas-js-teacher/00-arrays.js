// 0. Crear array
let arrNumbers = [10, 20, 30];

// 1. Agregar 40 al final del array
arrNumbers.push(40);

console.log(arrNumbers);

// 2. Eliminar último y guardar en "last"
const last = arrNumbers[3];
console.log(last);

arrNumbers.pop();
console.log(arrNumbers);

// 3. Verificar la existencia de 20 en "has20"
const verifyHas20 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arrNumbers[i] === 20) {
      return true;
    }
  }
};

let has20 = verifyHas20(arrNumbers);
console.log(has20);

console.log(arrNumbers.includes(20));

// 4. Obtener longitud en "len"
let len = arrNumbers.length;
console.log(len);
