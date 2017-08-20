import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import PlannedDisruption from './PlannedDisruption';

it('renders', () => {
  const tree = ReactTestRenderer.create(
    <PlannedDisruption 
      eventDate={new Date(2017, 8, 21)} 
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
