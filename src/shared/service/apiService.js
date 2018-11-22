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
      },
      po: '/po',
      generatePOUrl() {
        return `${baseUrl}${this.po}`;
      },
      pickUp: '/pickUp',
      generatePickUpUrl() {
        return `${baseUrl}${this.pickUp}`;
      },
      invoice: '/invoice',
      generateInvoiceUrl() {
        return `${baseUrl}${this.invoice}`;
      },
      asset: '/asset',
      generateAssetUrl() {
        return `${baseUrl}${this.asset}`;
      }
    }
  }
};

export default apiService;