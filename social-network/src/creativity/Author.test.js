import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import Author from './Author';

describe('AuthorInfo', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const author = {name: 'Jerry Mathers',
                        image: 'https://cdn-images-1.medium.com/fit/c/80/80/1*wsP97tix16onOIkq4STxuw.jpeg',
                        isMediumMember: false};
        ReactDOM.render(<Author
            author={author}            
            postdate='2018-05-24T07:00:00.000Z'
            minutes={3} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render with author name, article post date, etc.', () => {
        const author = {name: 'Jerry Mathers',
                        image: 'https://cdn-images-1.medium.com/fit/c/80/80/1*wsP97tix16onOIkq4STxuw.jpeg',
                        isMediumMember: false};
        const component = TestRenderer.create(<Author
                author={author}            
                postdate="2017-06-11T07:00:00.000Z"
                minutes={3} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});