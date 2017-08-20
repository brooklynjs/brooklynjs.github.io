import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import App from './App';
import { initialState } from './reducer';

it('renders', () => {
  const tree = ReactTestRenderer.create(
    <App state={initialState} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
