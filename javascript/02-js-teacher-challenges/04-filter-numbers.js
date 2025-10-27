// Ejercicio 4: Filtrar números menores a 100

function filterLessThan100(numbers) {
  const lessThan100 = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number < 100) {
      lessThan100.push(number);
    }
  }

  return lessThan100;
}

const list = [45, 200, 99, 150, 10];
console.log(filterLessThan100(list)); // [45, 99, 10]
