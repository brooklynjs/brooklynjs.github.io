import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from './App';

it('renders', () => {
  const tree = ReactTestRenderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});
