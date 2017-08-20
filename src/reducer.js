import { nextEventIndex } from './utils/events';

// Initial State
export const initialState = {
  allEvents: [],
  currentEvent: {
    eventDate: null,
    speakers: [],
    sponsors: []
  },
  currentEventIndex: null
};

// Actions
export const initialLoad = (events, now = new Date()) => ({
  type: 'INITIAL_LOAD', events, now
});

export const loadNextEvent = () => ({
  type: 'LOAD_NEXT_EVENT'
})

export const loadPreviousEvent = () => ({
  type: 'LOAD_PREVIOUS_EVENT'
});

// Reducer

const reducer = (state, action) => {
  switch(action.type) {
    case 'INITIAL_LOAD':
      return handleInitialLoad(state, action);

    case 'LOAD_NEXT_EVENT':
      return handleLoadNextEvent(state, action);

    case 'LOAD_PREVIOUS_EVENT':
      return handleLoadPreviousEvent(state, action);

    default:
      return state;
  }
};

const handleInitialLoad = (state, action) => {
  const { events, now } = action;
  const eventIndex = nextEventIndex(events, now);

  return {
    ...state,
    allEvents: events,
    currentEvent: events[eventIndex],
    currentEventIndex: eventIndex
  };
};

const handleLoadNextEvent = (state, action) => {
  const { allEvents, currentEventIndex } = state;

  if (currentEventIndex + 1 < allEvents.length) {
    const nextEventIndex = currentEventIndex + 1;
    const nextEvent = allEvents[nextEventIndex];

    return {
      ...state,
      currentEvent: nextEvent,
      currentEventIndex: nextEventIndex
    }
  } else {
    return state;
  }
};

const handleLoadPreviousEvent = (state, action) => {
  const { allEvents, currentEventIndex } = state;

  if (currentEventIndex > 0) {
    const previousEventIndex = currentEventIndex - 1;
    const previousEvent = allEvents[previousEventIndex];

    return {
      ...state,
      currentEvent: previousEvent,
      currentEventIndex: previousEventIndex
    };
  } else {
    return state;
  }
};

export default reducer;
