const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerDefinition = require('./swaggerDefinition.json');
require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/authentications');
const organizationRouter = require('./routes/organization');
const categoriesRouter = require('./routes/categories');
const newsRouter = require('./routes/news');
const activitiesRouter = require('./routes/activities');
const slidesRouter = require('./routes/slides');
const membersRouter = require('./routes/members');
const contactsRouter = require('./routes/contacts');
const testimonialsRouter = require('./routes/testimonials');
const commentsRouter = require('./routes/comments');

const app = express();
app.use(cors());

const options = {
  swaggerDefinition,
  apis: [`${path.join(__dirname, 'routes', '*.js')}`]
};
const swaggerSpec = swaggerJsDoc(options);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/organization', organizationRouter);
app.use('/auth', authRouter);
app.use('/categories', categoriesRouter);
app.use('/news', newsRouter);
app.use('/activities', activitiesRouter);
app.use('/slides', slidesRouter);
app.use('/members', membersRouter);
app.use('/contacts', contactsRouter);
app.use('/testimonials', testimonialsRouter);
app.use('/comments', commentsRouter);

/** test routes */
// const test_imagesRouter = require('./routes/test_images');
// app.use('/test', test_imagesRouter);

/*********************/
// ERROR HANDLER
// Error 404
app.use((req, res, next) => {
  const error = new Error("The requested resource doesn't exists.");
  error.status = 404;
  next(error);
});

// Error response & logger
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error.'
    }
  });
  console.log('****************************************');
  console.log(error);
  console.log('****************************************');
});

/*********************/

module.exports = app;
