import axios from 'axios';

const api = axios.create({
  //rodar na versão web  
 // baseURL: 'http://localhost:3333',

 // rodando em versão mobile
 baseURL: 'http://192.168.15.15:3333',
});

export default api;