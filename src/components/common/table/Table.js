import React from 'react';
import './styles.scss';
import ReactTable from "react-table";

const Table = (props) => {
  const {data, columns, filterable} = props;
  return (
    <ReactTable
      data={data}
      columns={columns}
      className="-striped -highlight"
      filterable={filterable}
      defaultFilterMethod={(filter, row) =>
        String(row[filter.id]) === filter.value}
    />
  );
};

export default Table;