import React from 'react';
import './Timeline.css';

import SpeakerSlot from './SpeakerSlot';

import {
  shortEventDate,
  timeLeft
} from '../utils/time';

import { generateSpeakerSlots } from '../utils/speakers';

const Timeline = ({ eventDate, speakers, sponsors }) => {
  const speakerSlots = generateSpeakerSlots(speakers);

  const displaySpeakers = speakerSlots.map((speaker, index) => (
    <SpeakerSlot speaker={speaker} index={index} key={`speaker-${index}`} />
  ));

  const displaySponsors = sponsors.map((sponsor, index) => {
    return (
      <div key={`sponsor-${index}`}>
        <a href={sponsor.url}>
          {sponsor.name}.
        </a>
      </div>
    );
  });

  return (
    <ol>
      <li className="end stop">
        <time>now</time>
        <small>See the event board to</small>
        <div>
          <a href="http://tickets.brooklynjs.com">Get your ticket</a> and <a href="http://tickets.brooklynjs.com">tell your friends</a>
        </div>
      </li>

      <li className="ride"></li>

      <li className="end stop">
        <small>Check out our</small>
        <div>
          <a href="coc.html">Code of Conduct</a>
        </div>
      </li>

      <li className="ride"></li>

      <li className="stop">
        <time>{timeLeft(eventDate)}</time>
        <small>Nothing to do but</small>
        <div>Wait patiently</div>
      </li>

      <li className="ride"></li>

      <li className="end stop">
        <time>{eventDate && shortEventDate(eventDate)}</time>
        <small>Make your way to our awesome venue,</small>
        <div>
        <a href="//61local.com">61 Local</a> on <a href="//www.google.com/maps?q=61+Bergen+St+11201">Bergen St.</a>
        </div>
      </li>

      <li className="ride"></li>

      <li className="end stop">
        <small>Maybe come early and geek out for some</small>
        <div>
          <a href="http://tickets.brooklynjs.com">Boroughgramming</a>
        </div>
      </li>

      <li className="walk">
        <small></small>
        <div></div>
      </li>

      <li className="stop">
        <time>7:00p</time>
        <small>Open the gray door in back, and</small>
        <div>Walk upstairs</div>
      </li>

      <li className="ride"></li>

      <li className="end stop">
        <time>7:30p</time>
        <small>Grab a seat in time for</small>
        <div>Introduction and kickoff</div>
      </li>

      {displaySpeakers}

      <li className="ride"></li>

      <li className="stop">
        <time>9:15p</time>
        <small>Wind down with the</small>
        <div>Wrap-up</div>
      </li>

      <li className="walk">
        <small>Round-trip downstairs to the bar to get some</small>
        <div>Local <a href="//www.beermenus.com/places/2237-61-local">craft beer</a> / soda</div>
      </li>

      <li className="stop">
        <time>12:00a</time>
        <small>Geek out with your boroughmates during</small>
        <div>The bevera.js social hour(s)</div>
      </li>

      <li className="ride"></li>

      <li className="end stop sponsors">
        <small>This event made possible by our sponsors</small>
        {displaySponsors}
        <div><a href="sponsorship.html">Be our next sponsor.</a></div>
      </li>
    </ol>
  );
};

export default Timeline;