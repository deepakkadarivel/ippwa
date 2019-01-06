import React from 'react';
import './styles.scss';
import ReactTable from "react-table";

const Table = (props) => {
  const {data, columns, filterable, onClick} = props;
  return (
    <ReactTable
      data={data}
      columns={columns}
      className="-striped -highlight"
      filterable={filterable}
      defaultFilterMethod={(filter, row) =>
        String(row[filter.id]) === filter.value}
      getTrProps={(state, rowInfo) => ({
        onClick: () => onClick(rowInfo.original)
      })}
    />
  );
};

export default Table;