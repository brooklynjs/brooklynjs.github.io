import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import Header from './Header';

it('renders', () => {
  const tree = ReactTestRenderer.create(<Header />).toJSON();

  expect(tree).toMatchSnapshot();
});
