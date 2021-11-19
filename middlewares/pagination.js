const testimonialsRepository = require('../repositories/testimonials');
const limit = 10;

const validateAndParseTestimonial = async (req, res, next) => {
  const maxCount = await testimonialsRepository.getCount();

  let page = Number(req.query.page);
  const lastPage = Math.ceil(maxCount / limit);
  
  if (page > lastPage) {
    page = 1;
  }
  
  const offset = (page - 1) * limit;
  const previousPage = page - 1;
  const nextPage = page + 1;
  
  const baseUrl = `${req.protocol}://${req.get('host')}/testimonials`;
  const previousPageUrl = baseUrl + `?page=${previousPage}`;
  const nextPageUrl = baseUrl + `?page=${nextPage}`;
  const lastPageUrl = baseUrl + `?page=${lastPage}`;
  
  req.body.limit = limit;
  req.body.offset = offset;
  req.body.maxCount = maxCount;
  req.body.page = page;
  req.body.previousPage = previousPage;
  req.body.nextPage = nextPage;
  req.body.lastPage = lastPage;
  req.body.previousPageUrl = previousPageUrl;
  req.body.nextPageUrl = nextPageUrl;
  req.body.lastPageUrl = lastPageUrl;

  next();
};

module.exports = {validateAndParseTestimonial}
