import React, {Component, PropTypes}  from 'react';
import DatePicker from '../DatePicker';
import TextField from 'material-ui/TextField';
import './WhenPicker.scss';

export default class WhenPicker extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    /**
     * The string for the label of the picker
     */
    label: PropTypes.string,
  };
  render() {
    const {
      label,
      ...other,
    } = this.props;

    const labelStyle = {
      marginTop: 24,
      marginLeft: 60,
      width: 60
    }
    return (
        <div className="when-input">
          <TextField id="label" value={label} style={labelStyle}/>
          <DatePicker
            floatingLabelText="Meeting's date & hours"
            mode="landscape" container="inline"
            {...other}
          />
        </div>
    );
  }
}
