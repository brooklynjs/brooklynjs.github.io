// Speakers
export const awesomeSpeaker = {
  title: 'Awesome Talk',
  name: 'Awesome Person',
  url: 'http://www.example.com/awesome'
};

export const chillSpeaker = {
  title: 'Chill Talk',
  name: 'Chill Person',
  url: 'http://www.example.com/chill'
};

export const dopeSpeaker = {
  title: 'Dope Talk',
  name: 'Dope Person',
  url: 'http://www.example.com/dope'
};

export const righteousSpeaker = {
  title: 'Righteous Talk',
  name: 'Righteous Person',
  url: 'http://www.example.com/righteous'
};

export const wildSpeaker = {
  title: 'Wild Talk',
  name: 'Wild Person',
  url: 'http://www.example.com/wild'
};

// Sponsors
export const generousSponsor = {
  name: 'Generous Sponsor',
  url: 'http://www.example.com/generous'
}

// Time
export const today = new Date(2017, 8, 20);

// Events
export const futureEvent = {
  eventDate: new Date(2017, 9, 19),
  speakers: [],
  sponsors: []
};

export const previousEvent = {
  eventDate: new Date(2017, 4, 20),
  speakers: [
    awesomeSpeaker,
    chillSpeaker,
    dopeSpeaker,
    righteousSpeaker,
    wildSpeaker
  ],
  sponsors: [
    generousSponsor
  ]
}

export const todayEvent = {
  eventDate: today,
  speakers: [
    chillSpeaker,
    dopeSpeaker
  ],
  sponsors: []
};

export const events = [
  previousEvent,
  todayEvent,
  futureEvent
];
