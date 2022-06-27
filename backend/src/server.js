const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const swaggerDocument = YAML.load('./docs/swagger.yaml');

const app = express();

const { host, user, pass } = config.get('database');
mongoose
  .connect(`mongodb+srv://${host}`, {
    user,
    pass,
  })
  .then((conn) => console.log('Connection success!'))
  .catch((err) => {
    throw new Error(err.message);
  });

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

const authenticateJwt = require('./model/auth/authenticate');

// app.get('/', (req, res) => {
//   res.send('api server');
// });
app.use('/product', authenticateJwt, require('./controller/product/router'));
app.use('/category', require('./controller/category/router'));
app.use('/login', require('./controller/login/router'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err, req, res, next) => {
  res.status = 500;
  res.json({
    hasError: true,
    message: 'Server Error',
  });
});

module.exports = app;
