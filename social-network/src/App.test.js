import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactTestRenderer from 'react-test-renderer';

/* it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
}); */

describe('App component', () => {
	it('should render', () => {
		const component = ReactTestRenderer.create(<App />);
		console.log(component.toJSON());
		
		expect(component.toJSON()).toMatchSnapshot();
  });
});