import { BACKEND_MESSAGING_URL } from '../constants/urls';
import axios from 'axios';

export const http = axios.create({ baseURL: BACKEND_MESSAGING_URL });