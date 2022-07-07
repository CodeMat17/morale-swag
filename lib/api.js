import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
});
const linstance = axios.create({
  baseURL: process.env.NEXTAUTH_URL,
});

export default instance;
export { linstance };
