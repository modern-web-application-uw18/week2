import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageBox from './ImageBox';

configure({adapter: new Adapter()});

describe('<ImageBox />', ()=> {

    let wrapper,
        item = {description:"Test"};

    beforeEach(()=>{
        wrapper = shallow(<ImageBox item={item} colClass='Test'/>);
    });


    it('should render div without any value value', ()=> {
        expect(wrapper.containsAllMatchingElements([
            <div></div>
          ])).toEqual(true);    
    });

    
    it('should render span with Test class', ()=> {
        expect(wrapper.find('.Test').exists()).toEqual(true);
    });


    it('should render span with Test class', ()=> {
        expect(wrapper.find('.image-box-missed').exists()).toEqual(true);
    });

    
   

});