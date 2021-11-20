const testimonialsRepository = require('../repositories/testimonials');
const membersRepository = require('../repositories/members');
const categoriesRepository = require('../repositories/categories');

const limit = 10;

const validate = (req, res, next) => {
    page = Number(req.query.page);
    if(isNaN(page)){
      req.query.page = '1';
    }
  next();
}

const parsePaginationData = (maxCount, req, table) => {
  let page = Number(req.query.page);
  const lastPage = Math.ceil(maxCount / limit);

  if (page > lastPage) {
    page = 1;
  }
  const offset = (page - 1) * limit;
  const previousPage = page - 1;
  const nextPage = page + 1;

  const baseUrl = `${req.protocol}://${req.get('host')}/${table}`;
  const previousPageUrl = baseUrl + `?page=${previousPage}`;
  const nextPageUrl = baseUrl + `?page=${nextPage}`;
  const lastPageUrl = baseUrl + `?page=${lastPage}`;

  const body = {
    limit: limit,
    offset: offset,
    maxCount: maxCount,
    page: page,
    previousPage: previousPage,
    nextPage: nextPage,
    lastPage: lastPage,
    previousPageUrl: previousPageUrl,
    nextPageUrl: nextPageUrl,
    lastPageUrl: lastPageUrl
  }
  return body;
}


const parseTestimonial = async (req, res, next) => {
  const maxCount = await testimonialsRepository.getCount();

  req.body = parsePaginationData(maxCount, req, 'testimonials');

  next();
};

const parseMembers = async (req, res, next) => {
  const maxCount = await membersRepository.getCount();

  req.body = parsePaginationData(maxCount, req, 'members');

  next();
};

const parseCategories = async (req, res, next) => {
  const maxCount = await categoriesRepository.getCount();

  req.body = parsePaginationData(maxCount, req, 'categories');

  next();
};

module.exports = {
  validate,
  parseTestimonial,
  parseMembers,
  parseCategories
};