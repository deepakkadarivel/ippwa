import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import SaveAlt from '@material-ui/icons/SaveAlt';
import {lighten} from '@material-ui/core/styles/colorManipulator';
import constants from './constants';

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const rows = [
  {id: 'workflowTypeName', numeric: false, disablePadding: false, label: constants.columns.workflowTypeName},
  {id: 'supplierName', numeric: false, disablePadding: false, label: constants.columns.supplierName},
  {id: 'stageName', numeric: false, disablePadding: false, label: constants.columns.stageName},
  {id: 'contractNo', numeric: false, disablePadding: false, label: constants.columns.contractNo},
  {id: 'contractOwner', numeric: false, disablePadding: false, label: constants.columns.contractOwner},
  {id: 'requestedBy', numeric: false, disablePadding: false, label: constants.columns.requestedBy},
  {id: 'poRequestNo', numeric: false, disablePadding: false, label: constants.columns.poRequestNo},
  {id: 'poNo', numeric: false, disablePadding: false, label: constants.columns.poNo},
  {id: 'pickUpRequestNo', numeric: false, disablePadding: false, label: constants.columns.pickUpRequestNo},
  {id: 'invoiceNo', numeric: false, disablePadding: false, label: constants.columns.invoiceNo},
  {id: 'assetRequestNo', numeric: false, disablePadding: false, label: constants.columns.assetRequestNo},
  {id: 'customerPONo', numeric: false, disablePadding: false, label: constants.columns.customerPONo},
  {id: 'customerInvoiceNo', numeric: false, disablePadding: false, label: constants.columns.customerInvoiceNo},
  {id: 'quoteRequestNo', numeric: false, disablePadding: false, label: constants.columns.quoteRequestNo},
  {id: 'costingRequestNo', numeric: false, disablePadding: false, label: constants.columns.costingRequestNo},
  {id: 'indentRequestNo', numeric: false, disablePadding: false, label: constants.columns.indentRequestNo},
  {id: 'travelRequestNo', numeric: false, disablePadding: false, label: constants.columns.travelRequestNo},
  {id: 'claimRequestNo', numeric: false, disablePadding: false, label: constants.columns.claimRequestNo},
  {id: 'createdDate', numeric: false, disablePadding: false, label: constants.columns.createdDate},
  {id: 'dueDateString', numeric: false, disablePadding: false, label: constants.columns.dueDateString},
  {id: 'status', numeric: false, disablePadding: false, label: constants.columns.status},
];

const tableHeadStyles = theme => ({
  head: {
    backgroundColor: theme.palette.primary.light,
  },
  body: {
    fontSize: 14,
    color: theme.palette.common.white,
    width: 160,
  },
});

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {order, orderBy, classes} = this.props;

    return (
      <TableHead className={classes.head}>
        <TableRow>
          {rows.map(row => {
            return (
              <TableCell
                key={row.id}
                numeric={row.numeric}
                padding={row.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                    className={classes.body}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

EnhancedTableHead = withStyles(tableHeadStyles)(EnhancedTableHead);

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = props => {
  const {classes} = props;

  return (
    <Toolbar className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h6" id="tableTitle">
          My Tasks
        </Typography>
      </div>
      <div className={classes.spacer}/>
      <div className={classes.actions}>
        <Tooltip title="Export All">
          <IconButton aria-label="Export All">
            <SaveAlt/>
          </IconButton>
        </Tooltip>
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class DesktopTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'calories',
      page: 0,
      rowsPerPage: 9,
    };
  }


  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({order, orderBy});
  };

  handleChangePage = (event, page) => {
    this.setState({page});
  };

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: event.target.value});
  };

  render() {
    const {classes, tasks} = this.props;

    const data = tasks.asMutable({deep: true});

    const {order, orderBy, rowsPerPage, page} = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar/>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {stableSort(data, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((task, index) => {
                  return (
                    <TableRow
                      hover
                      // onClick={event => this.handleClick(event, task)}
                      tabIndex={-1}
                      key={index}
                      className={classes.row}
                    >
                      <TableCell>{task.workflowTypeName}</TableCell>
                      <TableCell>{task.supplierName}</TableCell>
                      <TableCell>{task.stageName}</TableCell>
                      <TableCell>{task.contractNo}</TableCell>
                      <TableCell>{task.contractOwner}</TableCell>
                      <TableCell>{task.requestedBy}</TableCell>
                      <TableCell>{task.poRequestNo}</TableCell>
                      <TableCell>{task.poNo}</TableCell>
                      <TableCell>{task.pickUpRequestNo}</TableCell>
                      <TableCell>{task.invoiceNo}</TableCell>
                      <TableCell>{task.assetRequestNo}</TableCell>
                      <TableCell>{task.customerPONo}</TableCell>
                      <TableCell>{task.customerInvoiceNo}</TableCell>
                      <TableCell>{task.quoteRequestNo}</TableCell>
                      <TableCell>{task.quoteRequestNo}</TableCell>
                      <TableCell>{task.indentRequestNo}</TableCell>
                      <TableCell>{task.travelRequestNo}</TableCell>
                      <TableCell>{task.claimRequestNo}</TableCell>
                      <TableCell>{task.createdDate}</TableCell>
                      <TableCell>{task.dueDateString}</TableCell>
                      <TableCell>{task.status}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{height: 49 * emptyRows}}>
                  <TableCell colSpan={6}/>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

DesktopTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
};

export default withStyles(styles)(DesktopTable);