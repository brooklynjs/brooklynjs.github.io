import React from 'react';

import './PlannedDisruption.css';

import { longEventDate } from '../utils/time';

const PlannedDisruption = ({ eventDate }) => {
  return (
    <div className="planned-disruption">
      <span>PLANNED DISRUPTION</span>
      <span>{eventDate && longEventDate(eventDate)}</span>
      <br />
      <span>Please follow the directions below.</span>
    </div>
  );
};

export default PlannedDisruption;
