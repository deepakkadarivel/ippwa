import dotenv from 'dotenv';

dotenv.config();

const baseUrl = process.env.REACT_APP_BASE_URL;

const apiService = {
  baseUrl,
  timeout: 1000,
  endpoints: {
    app: {
      login: '/login',
      generateLoginUrl() {
        return `${baseUrl}${this.login}`;
      },
      tasks: '/tasks',
      generateTasksUrl() {
        return `${baseUrl}${this.tasks}`;
      }
    }
  }
};

export default apiService;