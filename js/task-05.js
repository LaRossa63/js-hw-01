const printAccessConsol = (country, price) => {
  console.log(`Доставка в [${country}] будет стоить [${price}] кредитов`);
};

const printErrorConsol = () => {
  console.log('В вашей стране доставка не доступна');
};

const input = prompt('Введите страну для доставки') || 'cancel ';

switch (input.toLocaleLowerCase()) {
  case 'китай':
    printAccessConsol('Китай', 100);
    break;

  case 'чили':
    printAccessConsol('Чили ', 250);
    break;

  case 'австралия':
    printAccessConsol('Австралия', 170);
    break;

  case 'индия':
    printAccessConsol('Индия', 80);
    break;

  case 'ямайка':
    printAccessConsol('Ямайка', 100);
    break;

  default:
    printErrorConsol();
    break;
}
