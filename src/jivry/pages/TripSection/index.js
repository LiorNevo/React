import React from 'react';
import WhenPicker from '../components/WhenPicker/WhenPicker';
import PlacePicker from '../components/PlacePicker';
import './index.scss';
import Paper from 'material-ui/Paper';


export default class TripSectionPage extends React.Component {

  render() {
    const style = {
      height: '100%',
      width: '100%',
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };
    return (
      <div className="page">
        <Paper style={style} zDepth={2}>
          <div className="trip-section">
            <PlacePicker/>
            <WhenPicker label="WHEN"/>
          </div>
        </Paper>
      </div>
    );
  }
}
