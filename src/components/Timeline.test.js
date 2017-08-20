import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Timeline from './Timeline';

it('renders', () => {
  const tree = ReactTestRenderer.create(
    <Timeline
      eventDate={new Date(2017, 8, 21)}
      speakers={[]}
      sponsors={[]}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
