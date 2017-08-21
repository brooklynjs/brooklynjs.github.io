import {
  generateSpeakerSlots,
  speakerSlotName,
  speakerSlotTime
} from './speakers';

import {
  awesomeSpeaker,
  chillSpeaker,
  dopeSpeaker,
  righteousSpeaker,
  wildSpeaker
} from '../fixtures';

describe('generateSpeakerSlots', () => {
  describe('when there are no speakers', () => {
    const speakers = [];

    it('returns an array of 5 instances of null to represent empty slots', () => {
      const subject = generateSpeakerSlots(speakers);
      const expectation = [null, null, null, null, null];

      expect(subject).toEqual(expectation);
    });
  });

  describe('when there is a complete speaker lineup', () => {
    const speakers = [awesomeSpeaker, chillSpeaker, dopeSpeaker, righteousSpeaker, wildSpeaker];

    it('returns the array of speakers', () => {
      const subject = generateSpeakerSlots(speakers);

      expect(subject).toEqual(speakers);
    });
  });

  describe('when there is an incomplete speaker lineup', () => {
    const speakers = [chillSpeaker, dopeSpeaker, wildSpeaker];

    it('returns the speakers with empty speaker slots', () => {
      const subject = generateSpeakerSlots(speakers);
      const expectation = [chillSpeaker, dopeSpeaker, wildSpeaker, null, null];

      expect(subject).toEqual(expectation);
    });
  });
});

describe('speakerSlotName', () => {
  it('returns the English name of that slot number', () => {
    expect(speakerSlotName(0)).toEqual('first');
    expect(speakerSlotName(1)).toEqual('second');
    expect(speakerSlotName(2)).toEqual('third');
    expect(speakerSlotName(3)).toEqual('fourth');
    expect(speakerSlotName(4)).toEqual('fifth');
  });
});

describe('speakerSlotTime', () => {
  it('returns the time associated with the speaker slot', () => {
    expect(speakerSlotTime(0)).toEqual('8:00p');
    expect(speakerSlotTime(1)).toEqual('8:15p');
    expect(speakerSlotTime(2)).toEqual('8:30p');
    expect(speakerSlotTime(3)).toEqual('8:45p');
    expect(speakerSlotTime(4)).toEqual('9:00p');
  });
});
