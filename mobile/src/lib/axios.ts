import axios from 'axios';
import { Platform } from 'react-native';

export const api = axios.create({
  baseURL:'http://localhost:3333'
})