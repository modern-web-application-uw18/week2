import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Description from './Description';

describe('ArticleInfo', () => {
    it('renders without crashing', () => {
        const articleInfo = document.createElement('ArticleInfo');
        ReactDOM.render(<Description
            title="Captain Jean-Luc Picard"
            description="Musings about the Star Trek Next Generation series" />, articleInfo);
        ReactDOM.unmountComponentAtNode(articleInfo);
    });

    it('should render with title, description', () => {
        const component = TestRenderer.create(
            <Description title="Resume Magic" description="How to craft the perfect resume" />);
            expect(component.toJSON()).toMatchSnapshot();
    });
});