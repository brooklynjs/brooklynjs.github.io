import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';

import App from './App';
import { initialState } from './reducer';

const dispatch = jest.fn();

const component = (
  <App
    state={initialState}
    dispatch={dispatch}
  />
);

it('renders', () => {
  const tree = ReactTestRenderer.create(component).toJSON();

  expect(tree).toMatchSnapshot();
});

describe('PlannedDisruption', () => {
  const wrapper = mount(component);

  it('dispatches the loadPreviousEvent action when the back arrow is clicked', () => {
    wrapper.find('.test-previous-event').first().simulate('click');

    expect(dispatch).toBeCalledWith({
      type: 'LOAD_PREVIOUS_EVENT'
    });
  });

  it('dispatches the loadNextEvent action when the next arrow is clicked', () => {
    wrapper.find('.test-next-event').first().simulate('click');

    expect(dispatch).toBeCalledWith({
      type: 'LOAD_NEXT_EVENT'
    });
  });
});
