import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BodyText from './BodyText';

configure({adapter: new Adapter()});

describe('<BodyText />', ()=> {

    let wrapper,
        item = {description:"Test"};

    beforeEach(()=>{
        wrapper = shallow(<BodyText item={item}/>);
    });


    it('should render span with Test value', ()=> {
        expect(wrapper.containsAllMatchingElements([
            <span>Test</span>
          ])).toEqual(true);    
    });

    
    it('should render span with body-text class', ()=> {
        expect(wrapper.find('.body-text').exists()).toEqual(true);
    });

   

});