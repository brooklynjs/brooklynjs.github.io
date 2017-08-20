import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import SpeakerSlot from './SpeakerSlot';

describe('an empty speaker slot', () => {
  it('renders', () => {
    const component = (
      <SpeakerSlot speaker={null} index={1} />
    );

    const tree = ReactTestRenderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('a speaker slot with a speaker', () => {
  const speaker = {
    title: 'A Very Cool Talk!',
    name: 'Willman Duffy',
    website: 'https://www.brooklynjs.com'
  };

  it('renders', () => {
    const component = (
      <SpeakerSlot speaker={speaker} index={1} />
    );

    const tree = ReactTestRenderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});