import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import PlannedDisruption from './PlannedDisruption';

import { today } from '../fixtures';

it('renders', () => {
  const tree = ReactTestRenderer.create(
    <PlannedDisruption
      eventDate={today}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
