/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';

/**
 * create a new instance axios
 */
export const http = axios.create({
  baseURL: process.env.REACT_APP_URL_API,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
