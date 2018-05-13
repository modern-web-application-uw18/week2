import React from 'react';
import ReactDOM from 'react-dom';
import Article from './Article'
import App from './App';
import testArticle from './Article-test.json';

it('renders without crashing with empty props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Article />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing with props', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Article article={testArticle} type="article" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
