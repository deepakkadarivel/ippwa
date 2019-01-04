import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import {getString} from "../../shared/utils/string";

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    marginTop: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    // minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

const ExpenseDesktop = (props) => {
  const {classes, rows, promise} = props;

  const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  return (
    <div>
      {promise.isPending && (<CircularProgress className="progress"/>)}
      {promise.isFulfilled && <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Entity</CustomTableCell>
              <CustomTableCell align="right">View</CustomTableCell>
              <CustomTableCell align="right">Request #</CustomTableCell>
              <CustomTableCell align="right">Item</CustomTableCell>
              <CustomTableCell align="right">Advance/Claim</CustomTableCell>
              <CustomTableCell align="right">Total Amount</CustomTableCell>
              <CustomTableCell align="right">Requested By</CustomTableCell>
              {/*<CustomTableCell align="right">Requested On</CustomTableCell>*/}
              <CustomTableCell align="right">Approved By</CustomTableCell>
              {/*<CustomTableCell align="right">Approved On</CustomTableCell>*/}
              <CustomTableCell align="right">Workflow Status</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow className={classes.row} key={row.REQUEST_NO}>
                  <TableCell>{getString(row.ENTITY_NAME)}</TableCell>
                  <TableCell>{getString(row.ENTITY_ID_FK)}</TableCell>
                  <TableCell>{getString(row.REQUEST_NO)}</TableCell>
                  <TableCell>{getString(row.ITEMS_DESCRIPTION)}</TableCell>
                  <TableCell>{getString(row.ADVANCE_OR_CLAIM)}</TableCell>
                  <TableCell>{getString(`${row.CURRENCY_SYMBOL} ${row.TOTAL_AMT}`)}</TableCell>
                  <TableCell>{getString(row.AC_DELIM_CREATED_BY_FUNC)}</TableCell>
                  {/*<TableCell>{getString(row.CREATED_DATE)}</TableCell>*/}
                  <TableCell>{getString(row.AC_DELIM_UPDATED_BY_FUNC)}</TableCell>
                  {/*<TableCell>{getString(row.UPDATED_DATE)}</TableCell>*/}
                  <TableCell>{getString(row.TEMP_STATUS_DESC)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>}
    </div>
  );
};

ExpenseDesktop.propTypes = {
  classes: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
  promise: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpenseDesktop);