import axios from 'axios';
import config from '@/config';

export default {
  getArticleList(data) {
    return axios.get(`${config.API_BASE}/article/articleList`, { params: data });
  },
  getArticle(data) {
    return axios.get(`${config.API_BASE}/article/${data}`);
  },
  getHotArticle() {
    return axios.get(`${config.API_BASE}/article/hotArticle`);
  },
  getVisitorCount(){
    return axios.get(`${config.API_BASE}/admin/visitorCount`);
  },
  star(data) {
    return axios.get(`${config.API_BASE}/article/star`, { params: data });
  },
};
