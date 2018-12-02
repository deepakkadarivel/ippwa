const setValue = (key, value) => localStorage.setItem(key, value);
const getValue = key => (localStorage.getItem(key) ? localStorage.getItem(key) : '');

export { setValue, getValue };
