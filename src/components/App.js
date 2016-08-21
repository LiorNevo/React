import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import './App.scss';

const App = (props) => {
  return (
    <div className="app">
      <div className="links">
        <IndexLink to="/">|Home|</IndexLink>
        <Link to="/fuel-savings">|Demo App|</Link>
        <Link to="/about">|About|</Link>
        <Link to="/tripSection">|Trip Section|</Link>
        <Link to="/testComponent">|Test Component|</Link>
        <Link to="/verticalTabsPage">|Vertical Tabs|</Link>
      </div>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
