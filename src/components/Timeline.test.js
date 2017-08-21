import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Timeline from './Timeline';

import { today } from '../fixtures';

it('renders', () => {
  const tree = ReactTestRenderer.create(
    <Timeline
      eventDate={today}
      speakers={[]}
      sponsors={[]}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
