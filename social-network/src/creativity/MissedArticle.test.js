import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import MissedArticle from './MissedArticle';
import testArticle from '../json/test-article.json';

describe('MissedArticle', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        const element = testArticle.map((article, index) => {
            return <MissedArticle key={index} missedarticle={article} />;
        });
        ReactDOM.render(element, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render with title, description, image, etc.', () => {
        const element = testArticle.map((article, index) => {
            return <MissedArticle key={index} missedarticle={article} />;
        });
        const component = TestRenderer.create(element);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
