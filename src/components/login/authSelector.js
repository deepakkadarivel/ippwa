import {get} from 'lodash';

const getEntityList = () => JSON.parse(localStorage.getItem('entityList'));
const getCurrencies = () => JSON.parse(localStorage.getItem('currencies'));

export { getEntityList, getCurrencies };