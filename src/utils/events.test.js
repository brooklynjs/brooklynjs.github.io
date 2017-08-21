import { nextEventIndex } from './events';

import {
  events,
  today
} from '../fixtures';

describe('nextEventIndex', () => {
  describe('when there is a next event', () => {
    // August 21, 2017
    const now = 1503288000000;

    it('returns the next event', () => {
      const subject = nextEventIndex(events, now);

      expect(subject).toEqual(2);
    });
  });

  describe('when the next event is Today', () => {
    // August 20, 2017
    it('returns the next event', () => {
      const subject = nextEventIndex(events, today);

      expect(subject).toEqual(1);
    });
  });

  describe('when there is no next event', () => {
    // Nov 1, 2017
    const now = 1509508800000;

    it('returns the last event', () => {
      const subject = nextEventIndex(events, now);

      expect(subject).toEqual(2);
    });
  });
});
