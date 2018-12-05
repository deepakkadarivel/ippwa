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
      updatePO: '/updatePO',
      generateUpdatePOUrl() {
        return `${baseUrl}${this.updatePO}`;
      },
      pickUp: '/pickUp',
      generatePickUpUrl() {
        return `${baseUrl}${this.pickUp}`;
      },
      updatePickUp: '/updatePickUp',
      generateUpdatePickUpUrl() {
        return `${baseUrl}${this.updatePickUp}`;
      },
      invoice: '/invoice',
      generateInvoiceUrl() {
        return `${baseUrl}${this.invoice}`;
      },
      asset: '/asset',
      generateAssetUrl() {
        return `${baseUrl}${this.asset}`;
      },
      updateAsset: '/updateAsset',
      generateUpdateAssetUrl() {
        return `${baseUrl}${this.updateAsset}`;
      }
    }
  }
};

export default apiService;
