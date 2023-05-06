import axios from 'axios';
import config from '@/config';

axios.defaults.baseURL = '/api'

export default {
  getArticleList(data) {
    return axios.get('/article/articleList', { params: data });
  },
  getArticle(data) {
    return axios.get(`/article/${data}`);
  },
  getHotArticle() {
    return axios.get('/article/hotArticle');
  },
  getHotTag() {
    return axios.get('/tag/hotTag');
  },
  getVisitorCount() {
    return axios.get('/admin/visitorCount');
  },
  star(data) {
    return axios.get('/article/star', { params: data });
  },
  getPhotoList(data) {
    return axios.get('/photo/list', { params: data });
  }
};
