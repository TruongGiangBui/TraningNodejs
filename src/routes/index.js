const SiteController = require('../app/controllers/SiteController');
const newsRouter = require('./news');
const siteController = require('./site');
const coursesRouter=require("./courses")
function route(app) {
  app.use('/news', newsRouter);
  app.use('/courses', coursesRouter);
  app.use('/', siteController);
}
module.exports = route;
