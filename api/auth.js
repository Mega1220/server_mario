const aksUser = require("../models/User");

async function Login(req, res, next) {
  try {
    // Реализация входа пользователя
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function saveUser(req, res, next){
  console.log(1111111111);
  console.log(req.body);
  console.log('Данные пришли в функцию апи');
  
  try {
    const { username, password } = req.body;

    // Создайте нового пользователя с использованием модели aksUser
    const newUser = new aksUser({ username, password });

    // Сохраните пользователя в базу данных
    await newUser.save();

    res.status(201).json({ message: 'User saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Обработчик для регистрации пользователя
async function Register(req, res, next) {
  try {
    // Реализация регистрации пользователя
    res.json({ message: 'Register successful' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Экспорт функций
module.exports = {
  Login,
  Register,
  saveUser
};