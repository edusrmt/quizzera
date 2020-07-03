import axios from 'axios';

export const trivia = axios.create({
  baseURL: 'https://opentdb.com/'
});