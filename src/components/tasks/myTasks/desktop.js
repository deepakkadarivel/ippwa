import React from 'react';
import PropTypes from 'prop-types';
import constants from '../../../shared/constants';
import {filterString} from '../../../shared/utils/string';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Table from "../../common/table/Table";

class DesktopTable extends React.Component {
  render() {
    const {tasks, history, promise} = this.props;

    const data = tasks.asMutable({deep: true});

    const handleClick = task => {
      this.props.setSelectedTask(task);
      switch (task.workflowTypeId) {
        case constants.TASKS_WORKFLOW_IDS.PO_REQUISITION_PROCESSING_TYPE:
          history.push('/home/tasks/po');
          break;
        case constants.TASKS_WORKFLOW_IDS.PICKUP_PROCESSING_TYPE:
          history.push('/home/tasks/pickUp');
          break;
        case constants.TASKS_WORKFLOW_IDS.INVOICE_PROCESSING_TYPE:
          history.push('/home/tasks/invoice');
          break;
        case constants.TASKS_WORKFLOW_IDS.ASSET_PROCESSING_TYPE:
          history.push('/home/tasks/asset');
          break;
        default:
          break;
      }
    };

    const headers = constants.tasks.columns;

    const columns = [
      {
        Header: headers.workflowTypeName,
        accessor: 'workflowTypeName',
        minWidth: 150,
        filterMethod: (filter, row) => {
          switch (filter.value) {
            case "asset":
              return row[filter.id] === 'Asset';
            case "invoice":
              return row[filter.id] === 'Invoice';
            case "pickUp":
              return row[filter.id] === 'PickUp';
            case "poRequisition":
              return row[filter.id] === 'PO Requisition';
            case "all":
            default:
              return true;
          }
        },
        Filter: ({filter, onChange}) =>
          <select
            onChange={event => onChange(event.target.value)}
            style={{width: "100%"}}
            value={filter ? filter.value : "all"}
          >
            <option value="all">All</option>
            <option value="asset">Asset</option>
            <option value="invoice">Invoice</option>
            <option value="pickUp">PickUp</option>
            <option value="poRequisition">PO Requisition</option>
          </select>
      }, {
        Header: headers.supplierName,
        accessor: 'supplierName',
        minWidth: 150,
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.stageName,
        accessor: 'stageName',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.contractNo,
        accessor: 'contractNo',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.contractOwner,
        accessor: 'contractOwner',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.requestedBy,
        accessor: 'requestedBy',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.poRequestNo,
        accessor: 'poRequestNo',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.poNo,
        accessor: 'poNo',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.pickUpRequestNo,
        accessor: 'pickUpRequestNo',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.invoiceNo,
        accessor: 'invoiceNo',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.assetRequestNo,
        accessor: 'assetRequestNo',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.customerPONo,
        accessor: 'customerPONo',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.customerInvoiceNo,
        accessor: 'customerInvoiceNo',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.quoteRequestNo,
        accessor: 'quoteRequestNo',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.costingRequestNo,
        accessor: 'costingRequestNo',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.indentRequestNo,
        accessor: 'indentRequestNo',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.travelRequestNo,
        accessor: 'travelRequestNo',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.claimRequestNo,
        accessor: 'claimRequestNo',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.createdDate,
        accessor: 'createdDate',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.dueDateString,
        accessor: 'dueDateString',
        filterMethod: (filter, row) => filterString(filter, row),
      }, {
        Header: headers.status,
        accessor: 'status',
        Cell: row => (
          <span>
            <span style={{
              color: row.value === 2 ? '#ff2e00'
                : row.value === 1 ? '#ffbf00'
                  : '#57d500',
              transition: 'all .3s ease'
            }}>
              &#x25cf;
            </span> {
            row.value === 2 ? 'Rejected'
              : row.value === 1 ? 'Pending'
              : 'Active'
          }
          </span>
        ),
        sortable: false,
        filterable: false,
      },
    ];

    return (
      <div>
        {promise.isPending && (<CircularProgress className="progress"/>)}
        {promise.isFulfilled && <Table
          data={data}
          columns={columns}
          filterable
          onClick={task => handleClick(task)}
        />
        }
      </div>
    );
  }
}

DesktopTable.propTypes = {
  promise: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  setSelectedTask: PropTypes.func.isRequired
};

export default DesktopTable;
