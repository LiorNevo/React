import React, {Component} from 'react';
import VerticalTabs from './VerticalTabs';
import VerticalTab from './VerticalTab';
import Paper from 'material-ui/Paper';
import FlightIcon from 'material-ui/svg-icons/maps/flight'
import HotelIcon from 'material-ui/svg-icons/maps/hotel'
import PolicyIcon from 'material-ui/svg-icons/maps/local-atm'


const VerticalTabsPage = () => {
    const tabItemContainerStyle = {
      backgroundColor: '#ffffff',
      height: '100%',
      color: '#0194d5',
      minWidth: '80px'
    };
    const inkBarStyle = {
      backgroundColor: '#0194d5'
    }
    return (
      <Paper style={{marginLeft: '300px', marginTop: '200px', width: '600px', height: '380px'}}>
      <VerticalTabs
        tabItemContainerStyle={tabItemContainerStyle}
        inkBarStyle={inkBarStyle}>
        <VerticalTab label="POLICY" icon={<PolicyIcon/>}>
          <div>
            <h2>POLICY</h2>
            <p>
              This is an example tab.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet culpa ea est ex numquam quod
                sequi soluta veniam vero. Dolor dolores eius expedita hic inventore laborum magni tempora ullam.</p>
          </div>
        </VerticalTab>
        <VerticalTab label="FLIGHTS" icon={<FlightIcon/>}>
          <div>
            <h2>FLIGHTS</h2>
            <p>
              This is another example tab.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet culpa ea est ex numquam quod
              sequi soluta veniam vero. Dolor dolores eius expedita hic inventore laborum magni tempora ullam.</p>
          </div>
        </VerticalTab>
        <VerticalTab label="HOTELS" icon={<HotelIcon/>}>
          <div>
            <h2>HOTELS</h2>
            <p>
              This is another example tab.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet culpa ea est ex numquam quod
              sequi soluta veniam vero. Dolor dolores eius expedita hic inventore laborum magni tempora ullam.</p>
          </div>
        </VerticalTab>
        <VerticalTab label="CARS">
          <div>
            <h2>CARS</h2>
            <p>
              This is another example tab.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet culpa ea est ex numquam quod
              sequi soluta veniam vero. Dolor dolores eius expedita hic inventore laborum magni tempora ullam.</p>
          </div>
        </VerticalTab>
        <VerticalTab label="PERSONAL">
          <div>
            <h2>PERSONAL</h2>
            <p>
              This is another example tab.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet culpa ea est ex numquam quod
              sequi soluta veniam vero. Dolor dolores eius expedita hic inventore laborum magni tempora ullam.</p>
          </div>
        </VerticalTab>
      </VerticalTabs>
        </Paper>
    );
}

export default VerticalTabsPage;
