// Массив пользователей с логинами и паролями
const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "user3", password: "password3" }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Предотвращаем отправку формы

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Проверка логина и пароля
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
      message.style.color = "green";
      message.textContent = "Успешный вход!";
      // Здесь можно перенаправить пользователя на другую страницу

      window.location.href = "index.html"; 
  } else {
      message.style.color = "red";
      message.textContent = "Неверный логин или пароль.";
  }
});
