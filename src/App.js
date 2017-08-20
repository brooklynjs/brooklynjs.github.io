import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import PlannedDisruption from './components/PlannedDisruption';
import Timeline from './components/Timeline';

import './App.css';

const state = {
  eventDate: new Date(2017, 8, 21),
  speakers: [],
  sponsors: []
};

const App = () => {
  const {
    eventDate,
    speakers,
    sponsors
  } = state;

  return (
    <div>
      <Header />

      <article>
        <PlannedDisruption eventDate={eventDate} />

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
