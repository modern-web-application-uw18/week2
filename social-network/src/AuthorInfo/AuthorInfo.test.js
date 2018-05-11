import React from 'react';
import ReactDOM from 'react-dom';
import AuthorInfo from './AuthorInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AuthorInfo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
