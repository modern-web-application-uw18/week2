import React from 'react';
import ReactDOM from 'react-dom';
import Article from './article';
import anArticle from './anArticle.json';
import TestRenderer from 'react-test-renderer';

describe('Article', () =>{
    it('Smoke test(make sure the component renders', () =>{
        const div = document.createElement('div');
    ReactDOM.render(<Article />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});