export default {
  API_BASE: process.env.NODE_ENV === 'development'
    ? 'http://localhost:7003'
    : 'http://www.yancx.com',
  imgBase: process.env.NODE_ENV === 'development'
    ? 'http://localhost:7003/images/'
    : 'http://www.yancx.com/images/',
};
