import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Article from './Article';
import testArticle from '../json/test-article.json';

describe('Article', () => {

    it('renders without crashing with data', () => {
        const div = document.createElement('div');
        const element = testArticle.map((article, index) => {
            return <Article key={index} article={article} />;
        });
        ReactDOM.render(element, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render with title, description, image, etc.', () => {
        const element = testArticle.map((article, index) => {
            return <Article key={index} article={article} />;
        });
        const component = TestRenderer.create(element);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
