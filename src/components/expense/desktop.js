import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Table from "../common/table/Table";
import {filterString} from "../../shared/utils/string";

const ExpenseDesktop = (props) => {
  const {rows, promise} = props;

  const columns = [{
    Header: 'Entity',
    accessor: 'ENTITY_NAME',
    filterMethod: (filter, row)=> filterString(filter, row),
  }, {
    id: 'VIEW_NAME',
    Header: 'View',
    accessor: d => d.VIEW_NAME || 'ALL',
    filterMethod: (filter, row)=> filterString(filter, row),
  }, {
    Header: 'Request #',
    accessor: 'REQUEST_NO',
    filterMethod: (filter, row)=> filterString(filter, row),
  }, {
    Header: 'Item',
    accessor: 'ITEMS_DESCRIPTION',
    filterMethod: (filter, row)=> filterString(filter, row),
  }, {
    Header: 'Advance/Claim',
    accessor: 'ADVANCE_OR_CLAIM',
    filterMethod: (filter, row) => {
      if (filter.value === "all") {
        return true;
      }
      if (filter.value === "advance") {
        return row[filter.id] === 'Advance';
      }
      return row[filter.id] === 'Claim';
    },
    Filter: ({ filter, onChange }) =>
      <select
        onChange={event => onChange(event.target.value)}
        style={{ width: "100%" }}
        value={filter ? filter.value : "all"}
      >
        <option value="all">Show All</option>
        <option value="advance">Advance</option>
        <option value="claim">Claim</option>
      </select>
  }, {
    id: 'TOTAL_AMT',
    Header: 'Total Amount',
    accessor: d => `${d.CURRENCY_SYMBOL} ${d.TOTAL_AMT}`,
    filterMethod: (filter, row)=> filterString(filter, row),
  }, {
    Header: 'Requested By',
    accessor: 'AC_DELIM_CREATED_BY_FUNC',
    filterMethod: (filter, row)=> filterString(filter, row),
  }, {
    id: 'CREATED_DATE',
    Header: 'Requested On',
    accessor: d => `${d.CREATED_DATE.date}/${d.CREATED_DATE.month}/${d.CREATED_DATE.year}`,
    filterMethod: (filter, row)=> filterString(filter, row),
  }, {
    Header: 'Approved By',
    accessor: 'AC_DELIM_UPDATED_BY_FUNC',
    filterMethod: (filter, row)=> filterString(filter, row),
  }, {
    id: 'UPDATED_DATE',
    Header: 'Approved On',
    accessor: d => `${d.UPDATED_DATE.date}/${d.UPDATED_DATE.month}/${d.UPDATED_DATE.year}`,
    filterMethod: (filter, row)=> filterString(filter, row),
  }, {
    Header: 'Workflow Status',
    accessor: 'TEMP_STATUS_DESC',
    filterMethod: (filter, row) => {
      switch (filter.value) {
        case "approved":
          return row[filter.id] === 'Approved';
        case "saved":
          return row[filter.id] === 'Saved';
        case "cancelled":
          return row[filter.id] === 'Cancelled';
        case "rejected":
          return row[filter.id] === 'Process Rejected';
        case "all":
        default:
          return true;
      }
    },
    Filter: ({ filter, onChange }) =>
      <select
        onChange={event => onChange(event.target.value)}
        style={{ width: "100%" }}
        value={filter ? filter.value : "all"}
      >
        <option value="all">Show All</option>
        <option value="approved">Approved</option>
        <option value="saved">Saved</option>
        <option value="rejected">Process Rejected</option>
        <option value="cancelled">Cancelled</option>
      </select>
  },
  ];

  return (
    <div>
      {promise.isPending && (<CircularProgress className="progress"/>)}
      {promise.isFulfilled && <Table
        data={rows}
        columns={columns}
        filterable
      />}
    </div>
  );
};

ExpenseDesktop.propTypes = {
  rows: PropTypes.array.isRequired,
  promise: PropTypes.object.isRequired,
};

export default ExpenseDesktop;