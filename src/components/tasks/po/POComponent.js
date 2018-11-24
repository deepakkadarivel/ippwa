import React, {Component} from "react";
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import './po.scss';
import constants from "../../../shared/constants";
import FormInputField from "../../common/form/FormInputField";
import FormSelectField from "../../common/form/FormSelectField";

class POComponent extends Component {
  componentDidMount() {
    this.props.getPO(this.props.selectedTask);
  }

  render() {
    const {
      po,
      promise,
    } = this.props;

    const renderHeaders = () => {
      return po.header.map(x => {
        switch (x.type) {
          case 'text':
            return <FormInputField x={x} className='col-s-3 col-2 col-xs-6'/>;
          case 'select':
            return <FormSelectField x={x} className='col-s-3 col-2 col-xs-6'/>;
          default:
            return null;
        }
      });
    };

    return (
      <div className='PO container'>
        <Card className='PO-Card'>
          <CardContent>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {constants.PO.PO_TITLE}
            </Typography>
            <Divider variant="inset"/>

            {/* PO Header */}
            {promise.isFulfilled && renderHeaders()}

          </CardContent>
        </Card>
      </div>
    )
  }
}

POComponent.propTypes = {
  getPO: PropTypes.func.isRequired,
  selectedTask: PropTypes.object.isRequired,
  po: PropTypes.object.isRequired,
  promise: PropTypes.object.isRequired,
};

export default POComponent;
