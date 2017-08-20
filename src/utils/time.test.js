import {
  longEventDate,
  shortEventDate,
  suffixed,
  timeLeft
 } from './time';

describe('longEventDate', () => {
  const eventDate = new Date(2017, 8, 21);

  it('takes a date and maps it out to a string with the time of the event', () => {
    const subject = longEventDate(eventDate);

    expect(subject).toEqual('Thursday, September 21st, at 7pm');
  });
});

describe('shortEventDate', () => {
  const eventDate = new Date(2017, 8, 21);

  it('takes a date and displays a short form string', () => {
    const subject = shortEventDate(eventDate);

    expect(subject).toEqual('9/21');
  });
});

describe('suffixed', () => {
  it('suffixes a number with th when it is between 10 and 20', () => {
    const subject = suffixed(11);

    expect(subject).toEqual('11th');
  });

  it('suffixes a number with st when it ends with a 1 and is not 11', () => {
    const subject = suffixed(21);

    expect(subject).toEqual('21st');
  });

  it('suffixes a number with nd when it ends with a 2 and is not 12', () => {
    const subject = suffixed(22);

    expect(subject).toEqual('22nd');
  });

  it('suffixes a number with rd when it ends with 3 and is not 13', () => {
    const subject = suffixed(23);

    expect(subject).toEqual('23rd');
  });

  it('suffixes a number with th when it does not fall into any of the above cases', () => {
    const subject = suffixed(28);

    expect(subject).toEqual('28th');
  });
});

describe('timeLeft', () => {
  const now = 1503232545609;

  it('displays the number of days when the event is multiple days away', () => {
    const eventDate = new Date(2017, 8, 21);
    const subject = timeLeft(eventDate, now);

    expect(subject).toEqual('31 days');
  });

  it('displays "1 day" when the event is a day away', () => {
    const eventDate = new Date(2017, 7, 22)
    const subject = timeLeft(eventDate, now);

    expect(subject).toEqual('1 day');
  });

  it('falls back to "a while" when the event has passed', () => {
    const eventDate = new Date(2017, 7, 21)
    const subject = timeLeft(eventDate, now);

    expect(subject).toEqual('A while');
  });

  it('fails gracefully', () => {
    const subject = timeLeft(null, now);

    expect(subject).toEqual('');
  });
});
