import React from 'react';

import './PlannedDisruption.css';

import { longEventDate } from '../utils/time';
import arrow from '../svg/arrow.svg';

const PlannedDisruption = ({ eventDate, onNextEventClick, onPreviousEventClick }) => {
  return (
    <div className="planned-disruption">
      <div className="planned-disruption-header">
        <a onClick={() => onPreviousEventClick()} className="test-previous-event">
          <img src={arrow} alt='Back' className='left' />
        </a>

        <div className="planned-disruption-title">
          PLANNED DISRUPTION
        </div>

        <a onClick={() => onNextEventClick()} className="test-next-event">
          <img src={arrow} alt='Next' />
        </a>
      </div>

      <span>{eventDate && longEventDate(eventDate)}</span>
      <br />
      <span>Please follow the directions below.</span>
    </div>
  );
};

export default PlannedDisruption;
