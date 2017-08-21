import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import SpeakerSlot from './SpeakerSlot';

import { chillSpeaker } from '../fixtures';

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
  it('renders', () => {
    const component = (
      <SpeakerSlot speaker={chillSpeaker} index={1} />
    );

    const tree = ReactTestRenderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
