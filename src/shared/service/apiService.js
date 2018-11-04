import dotenv from 'dotenv';

dotenv.config();

const baseUrl = process.env.REACT_APP_BASE_URL;

const apiService = {
  baseUrl,
  timeout: 1000,
  endpoints: {
    app: {
      login: '/api/auth',
      generateGLoginUrl() {
        return `${baseUrl}${this.login}`;
      }
    }
  }
};

export default apiService;