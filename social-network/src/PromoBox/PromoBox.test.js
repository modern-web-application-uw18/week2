import React from 'react';
import PromoBox from './PromoBox';
import ReactTestRenderer from 'react-test-renderer';

describe('PromoBox component', () => {
  it('should render', () => {
    const component = ReactTestRenderer.create(<PromoBox />);
    // console.log(component.toJSON());
    expect(component.toJSON()).toMatchSnapshot();
  });
});
