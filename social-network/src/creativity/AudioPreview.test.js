import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import AudioPreview from './AudioPreview';

describe('ArticleAudio', () => {
    it('renders without crashing', () => {
        const articleAudio = document.createElement('ArticleAudio');
        ReactDOM.render(<AudioPreview
            hasAudioAvailable={true}
            memberPreview={false} />, articleAudio);
        ReactDOM.unmountComponentAtNode(articleAudio);
    });

    it('should render with hasAudioAvailable, memberPreview', () => {
        const component = TestRenderer.create(
            <AudioPreview hasAudioAvailable={true} memberPreview={false} />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
