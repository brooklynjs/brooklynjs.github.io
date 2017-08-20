// We always want to display 5 speaker slots in the timeline. A null speaker slot means that there
// is no speaker currently booked in that slot and we will display a link to submit a talk instead.
export const generateSpeakerSlots = (speakers) => {
  const speakerSlots = [null, null, null, null, null];

  speakerSlots.splice(0, speakers.length, ...speakers);

  return speakerSlots;
};

export const speakerSlotName = (index) => {
  const names = [
    'first',
    'second',
    'third',
    'fourth',
    'fifth'
  ];

  return names[index];
};

export const speakerSlotTime = (index) => {
  const times = [
    '8:00p',
    '8:15p',
    '8:30p',
    '8:45p',
    '9:00p'
  ];

  return times[index];
};