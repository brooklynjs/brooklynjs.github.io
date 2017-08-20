// Find the first event in an array of events that has an `eventDate` after the current time. This
// is used to find the first event we load by default.
export const nextEventIndex = (events, now = new Date()) => {
  const nextIndex =  events.findIndex((event) => {
    // Set event date until end of day so that we will still select this event throughout the
    // duration of the event day itself.
    const endOfEventDay = event.eventDate.setHours(23, 59, 59, 999);

    return endOfEventDay > Date.parse(now);
  });

  // If there is no next event, return the last event in the events array.
  return nextIndex > 0 ? nextIndex : events.length - 1;
};
