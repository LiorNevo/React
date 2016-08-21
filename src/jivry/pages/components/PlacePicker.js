import React from 'react';

export default class PlacePicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <button onClick={() => {alert("test")}}>test</button>
    );
  }
}
