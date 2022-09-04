const ADMIN_PASSWORD = '123';
let message;

const input = prompt('Введите пароль');

if (input === null) {
  console.log('Отменено пользователем!');
} else if (input === ADMIN_PASSWORD) {
  console.log('Добро пожаловать!');
} else {
  console.log('Доступ запрещен, неверный пароль!');
}
