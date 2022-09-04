const credits = 23580;
const pricePerDroid = 3000;

const processingInput = (text) => {
  if (text === null) {
    return 'Отменено пользователем!';
  }

  const countDroid = Number(text);
  const totalPrice = pricePerDroid * countDroid;

  return credits > totalPrice
    ? `Вы купили [${countDroid}] дронов, на счету осталось [${
        credits - totalPrice
      }] кредитов.`
    : 'Недостаточно средств на счету!';
};

const input = prompt('Сколько дронов Вам нужно ?');

console.log(processingInput(input));
