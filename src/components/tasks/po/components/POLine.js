import React from 'react';
import PropTypes from 'prop-types';
import '../po.scss';
import {filterString} from '../../../../shared/utils/string';
import constants from "../../common/constants";
import Table from "../../../common/table/Table";

const POLine = props => {
  const {handleLineItemChange, lines} = props;
  const renderEditable = (cellInfo) => {
    return (
      <input
        type='text'
        className='PO__Line--edit'
        contentEditable
        suppressContentEditableWarning
        value={lines[cellInfo.index][cellInfo.column.id]}
        onChange={e => handleLineItemChange(cellInfo.index, cellInfo.column.id, e.target.value)}
      />
    );
  };
  const columns = [
    {
      Header: constants.labels.lineItemId,
      accessor: constants.accessor.lineItemId,
      filterMethod: (filter, row) => filterString(filter, row),
    }, {
      Header: constants.labels.itemDescription,
      accessor: constants.accessor.itemDescription,
      filterMethod: (filter, row) => filterString(filter, row),
    }, {
      Header: constants.labels.category,
      accessor: constants.accessor.categoryDesc,
      filterMethod: (filter, row) => filterString(filter, row),
    }, {
      Header: constants.labels.subCategory,
      accessor: constants.accessor.subCategoryDesc,
      filterMethod: (filter, row) => filterString(filter, row),
    }, {
      Header: constants.labels.uom,
      accessor: constants.accessor.uom,
      filterMethod: (filter, row) => filterString(filter, row),
    }, {
      Header: constants.labels.price,
      accessor: constants.accessor.price,
      filterMethod: (filter, row) => filterString(filter, row),
    }, {
      Header: constants.labels.sgst,
      accessor: constants.accessor.sgst,
      filterMethod: (filter, row) => filterString(filter, row),
    }, {
      Header: constants.labels.cgst,
      accessor: constants.accessor.cgst,
      filterMethod: (filter, row) => filterString(filter, row),
    }, {
      Header: constants.labels.tax,
      accessor: constants.accessor.tax,
      filterMethod: (filter, row) => filterString(filter, row),
    }, {
      Header: constants.labels.netPrice,
      accessor: constants.accessor.netPrice,
      filterMethod: (filter, row) => filterString(filter, row),
    }, {
      Header: constants.labels.totalAmount,
      accessor: constants.accessor.totalAmount,
      filterMethod: (filter, row) => filterString(filter, row),
    }, {
      Header: constants.labels.quantity,
      accessor: constants.accessor.quantity,
      filterMethod: (filter, row) => filterString(filter, row),
      Cell: renderEditable
    }, {
      Header: constants.labels.comments,
      accessor: constants.accessor.comments,
      filterMethod: (filter, row) => filterString(filter, row),
      Cell: renderEditable
    },
  ];
  return (
    <div className='PO__Line'>
      <Table
        data={lines}
        columns={columns}
        onClick={() => {
        }}
        disableFooter={true}
      />
    </div>
  );
};

POLine.propType = {
  line: PropTypes.object.isRequired,
  lines: PropTypes.array.isRequired,
  handleLineItemChange: PropTypes.func
};

export default POLine;
