const printConsol = (country, price) => {
  console.log(`Доставка в [${country}] будет стоить [${price}] кредитов`);
};

const input = prompt('Введите страну для доставки');

switch (input.toLocaleLowerCase()) {
  case 'китай':
    printConsol('Китай', 100);
    break;

  case 'чили':
    printConsol('Чили ', 250);
    break;

  case 'австралия':
    printConsol('Австралия', 170);
    break;

  case 'индия':
    printConsol('Индия', 80);
    break;

  case 'ямайка':
    printConsol('Ямайка', 100);
    break;

  default:
    console.log('В вашей стране доставка не доступна');
    break;
}
