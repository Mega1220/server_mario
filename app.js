const aksExpress = require('express');
const aksMongoose = require('mongoose')
const aksAuthRouter = require('./routes/authRouter');
const aksCors = require('cors');
const aksBodyParser = require("body-parser");
const PORT = process.env.PORT || 4025;
const aksCookieParser = require('cookie-parser');
const { coockie_secret } = require("./config");

const app = aksExpress(); // обязательно точка с запятой тут

app.use(aksBodyParser.json());
app.use(aksCors({
  origin: ['http://localhost:3000', 'https://mysite.com'],
  credentials: true
}));

app.use(aksCookieParser(coockie_secret));
app.use("/auth/", aksAuthRouter);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

// const MONGOOSE_URI = "mongodb+srv://";

const MONGOOSE_URI = `mongodb+srv://aaa:naprimer123456@cluster0.sw4rzay.mongodb.net/`;

aksMongoose
  .connect(MONGOOSE_URI)
  .then((result) => {
    app.listen(PORT, '0.0.0.0', () => {
      console.log('Server started on port:${PORT}');
    });
  })
  .catch((err) => console.log(err));