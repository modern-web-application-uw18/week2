import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import TestRenderer from 'react-test-renderer';

describe('Card component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  if('should render', () => {
    const component = TestRenderer.create(<Card />);
    console.log(component.toJSON());

    expect(component.toJSON()).toMatchSnapshot();
  });
});
