import reducer, {
  initialLoad,
  initialState,
  loadNextEvent,
  loadPreviousEvent
} from './reducer';

import {
  events,
  futureEvent,
  previousEvent,
  today,
  todayEvent
} from './fixtures';

describe('reducer', () => {
  describe('INITIAL_LOAD', () => {
    it('loads the event data and selects the next event', () => {
      const newState = reducer(initialState, initialLoad(events, today));

      expect(newState).toMatchObject({
        allEvents: events,
        currentEvent: todayEvent,
        currentEventIndex: 1
      });

      expect(newState).toMatchSnapshot();
    });
  });

  describe('LOAD_NEXT_EVENT', () => {
    describe('when the currentEvent is not the last event', () => {
      const state = {
        ...initialState,
        allEvents: events,
        currentEvent: todayEvent,
        currentEventIndex: 1
      };

      it('sets the current event to be the next event', () => {
        const newState = reducer(state, loadNextEvent());

        expect(newState).toMatchObject({
          currentEvent: futureEvent,
          currentEventIndex: 2
        });

        expect(newState).toMatchSnapshot();
      });
    });

    describe('when the currentEvent is already the last event', () => {
      const state = {
        ...initialState,
        allEvents: events,
        currentEvent: futureEvent,
        currentEventIndex: 2
      };

      it('does not modify the state', () => {
        const newState = reducer(state, loadNextEvent());

        expect(newState).toEqual(state);
      });
    });
  });

  describe('LOAD_PREVIOUS_EVENT', () => {
    describe('when the currentEvent is not the first event', () => {
      const state = {
        ...initialState,
        allEvents: events,
        currentEvent: futureEvent,
        currentEventIndex: 2
      };

      it('sets the current event to be the previous event', () => {
        const newState = reducer(state, loadPreviousEvent());

        expect(newState).toMatchObject({
          currentEvent: todayEvent,
          currentEventIndex: 1
        });

        expect(newState).toMatchSnapshot();
      });
    });

    describe('when the currentEvent is the first event', () => {
      const state = {
        ...initialState,
        allEvents: events,
        currentEvent: previousEvent,
        currentEventIndex: 0
      };

      it('does not modify the state', () => {
        const newState = reducer(state, loadPreviousEvent());

        expect(newState).toEqual(state);
      });
    });
  });
});
