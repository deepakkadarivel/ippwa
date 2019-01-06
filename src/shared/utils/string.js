export const getString = value => (value ? value : '-');

export const getExactString = value => (value ? value : '');

export const getIntString = value => (value ? value : 0);

export const getDateString = value => {
  if (value) {
    const x = value.split('/');
    return `${x[2]}-${x[0]}-${x[1]}`;
  }
  return '';
};

export const filterString = (filter, row) =>
  (row[filter.id]).toLowerCase().includes(filter.value.toLowerCase());
