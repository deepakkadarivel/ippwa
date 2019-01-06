import React from 'react';
import './styles.scss';
import ReactTable from "react-table";

const Table = (props) => {
  const {data, columns, filterable, onClick, disableFooter} = props;
  return (
    <div>
      {disableFooter ? <ReactTable
        data={data}
        columns={columns}
        className={`${disableFooter ? 'lines -striped -highlight' : '-striped -highlight'}`}
        filterable={filterable}
        PaginationComponent={() => null}
        defaultPageSize={data.length}
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value}
        getTrProps={(state, rowInfo) => ({
          onClick: () => onClick(rowInfo.original)
        })}
      /> : <ReactTable
        data={data}
        columns={columns}
        className="-striped -highlight"
        filterable={filterable}
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]) === filter.value}
        getTrProps={(state, rowInfo) => ({
          onClick: () => onClick(rowInfo.original)
        })}
      />}
    </div>
  )
    ;
};

export default Table;