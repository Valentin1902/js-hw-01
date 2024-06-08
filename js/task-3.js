{
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message = "Доступ заборонено, невірний пароль!";

  const password = prompt("Введіть пароль");

  if (password === null) {
    message = "Операцію скасовано!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Ласкаво просимо!";
  }

  alert(message);
}
