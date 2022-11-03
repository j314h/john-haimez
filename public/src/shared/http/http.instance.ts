import axios from 'axios'

/**
 * create a new instance axios
 */
export const http = axios.create({
  baseURL: 'https://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/ld+json',
    Accept: 'application/ld+json',
  },
})
