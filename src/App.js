import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import PlannedDisruption from './components/PlannedDisruption';
import Timeline from './components/Timeline';

import {
  loadPreviousEvent,
  loadNextEvent
} from './reducer';

import './App.css';

const App = ({ state, dispatch }) => {
  const {
    eventDate,
    speakers,
    sponsors
  } = state.currentEvent;

  return (
    <div>
      <Header />

      <article>
        <PlannedDisruption
          eventDate={eventDate}
          onNextEventClick={() => dispatch(loadNextEvent())}
          onPreviousEventClick={() => dispatch(loadPreviousEvent())}
        />

        <Timeline
          eventDate={eventDate}
          speakers={speakers}
          sponsors={sponsors}
        />
      </article>

      <Footer />
    </div>
  );
}
export default App;
