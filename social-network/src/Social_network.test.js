import React from 'react'; //needed to test react components
import ReactDOM from 'react-dom';
import Article from './article'; 
import Missed_article from './missedArticle';

import ReactTestRenderer from 'react-test-renderer';
import yourArticles from './yourArticles.json';



describe('Article component', () => { 
    it('renders without crashing', () => {
        const div = document.createElement('div');
        
        const item = {
                title: 'howdy',
                description: 'doo!',
                image: 'text',
                author: 'stuff' 
        };
    const component = ReactTestRenderer.create(<Article {...item} />);
    console.log(component.toJSON()); 
    expect(component.toJSON()).toMatchSnapshot(); //this gave
    });
});
