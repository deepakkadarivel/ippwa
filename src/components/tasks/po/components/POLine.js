import React from 'react';
import PropTypes from 'prop-types';
import '../po.scss';
import {filterString} from '../../../../shared/utils/string';
import globalConstants from '../../../../shared/constants';
import constants from "../../common/constants";
import Table from "../../../common/table/Table";
import Typography from "@material-ui/core/Typography/Typography";

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

  const mobileColumns = [
    {
      Header: "Property",
      accessor: "property",
      Cell: ci => {
        return `${ci.value}:`;
      },
      style: {
        textAlign: "right",
        fontWeight: "bold"
      }
    },
    {
      Header: "Value",
      accessor: "value",
      Cell: ci => {
        // if (ci.original.property === constants.labels.quantity || ci.original.property === constants.labels.comments) {
        //   return renderEditable(ci);
        // }
        return `${ci.value}`;
      },
    }
  ];

  const getMobileData = (line) => {
    return [
      {
        property: constants.labels.lineItemId,
        value: line.lineItemId,
      }, {
        property: constants.labels.itemDescription,
        value: line.itemDescription,
      }, {
        property: constants.labels.category,
        value: line.categoryDesc,
      }, {
        property: constants.labels.subCategory,
        value: line.subCategoryDesc,
      }, {
        property: constants.labels.uom,
        value: line.uom,
      }, {
        property: constants.labels.price,
        value: line.price,
      }, {
        property: constants.labels.sgst,
        value: line.sgst,
      }, {
        property: constants.labels.cgst,
        value: line.cgst,
      }, {
        property: constants.labels.tax,
        value: line.tax,
      }, {
        property: constants.labels.netPrice,
        value: line.netPrice,
      }, {
        property: constants.labels.totalAmount,
        value: line.totalAmount,
      }, {
        property: constants.labels.quantity,
        value: line.quantity,
        Cell: renderEditable
      }, {
        property: constants.labels.comments,
        value: line.comments,
        Cell: renderEditable
      },
    ];
  };

  return (
    <div className='PO__Line'>
      <Typography component="h5" variant="h5" color="primary">
        {globalConstants.TITLES.LINE_ITEMS}
      </Typography>
      <div className='PO__Line--desktop'>
      <Table
        data={lines}
        columns={columns}
        onClick={() => {
        }}
        disableFooter={true}
      />
      </div>
      {lines.map(task => <div className='PO__Line--mobile'>
          <Table
            data={getMobileData(task)}
            columns={mobileColumns}
            pageSize={getMobileData(task).length}
            onClick={() => {}}
            disableHeader={true}
          />
        </div>
      )}
    </div>
  );
};

POLine.propType = {
  line: PropTypes.object.isRequired,
  lines: PropTypes.array.isRequired,
  handleLineItemChange: PropTypes.func
};

export default POLine;
