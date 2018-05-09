import React from 'react';
import CreativityPage from './index';
import ArticleItem from './ArticleItem';
import ReactTestRenderer from 'react-test-renderer';

describe('CreativityPage component', () => {
    it('should render', () => {
        const component = ReactTestRenderer.create(<CreativityPage />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
describe('ArticleItem component', () => {
    it('should render', () => {
        const component = ReactTestRenderer.create(<ArticleItem />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});