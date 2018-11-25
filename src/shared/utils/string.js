export const getString = value => value ? value : '-';

export const getExactString = value => value ? value : '';

export const getDateString = value => {
  if (value) {
    const x = value.split('/');
    return `${x[2]}-${x[0]}-${x[1]}`;
  }
  return '';
};