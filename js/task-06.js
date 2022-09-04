let input = '';
let totalCount = 0;

while (input !== null) {
  input = prompt('Введите число!');

  if (input === null) {
    break;
  }

  totalCount += Number(input);
}

console.log(`Общая сумма чисел равна [${totalCount}]`);
