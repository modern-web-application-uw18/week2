import React from 'react';
import ReactDOM from 'react-dom';
import MissedArticle from './MissedArticle'
import App from './App';
import testArticle from './Article-test.json';

it('renders without crashing with empty props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MissedArticle />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing with props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MissedArticle article={testArticle} type="article" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
