import axios from 'axios';
import config from '@/config';

export default {
  getArticleList(data) {
    return axios.get(`${config.API_BASE}/article/articleList`, { params: data });
  },
  getArticle(data) {
    return axios.get(`${config.API_BASE}/article/${data}`);
  },
};
