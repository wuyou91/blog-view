export default {
  API_BASE: process.env.NODE_ENV === 'development'
    ? 'http://localhost:7003'
    : 'http://www.yancx.cn',
  cdn:'http://blog.cdn.yancx.cn',
};
