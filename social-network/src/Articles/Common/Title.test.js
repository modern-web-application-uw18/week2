import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from './Title';

configure({adapter: new Adapter()});

describe('<Title />', ()=> {

    let wrapper,
        item = {title:"Test"};

    beforeEach(()=>{
        wrapper = shallow(<Title item={item}/>);
    });


    it('should render h6 with value Test', ()=> {
        expect(wrapper.containsAllMatchingElements([
            <h6>Test</h6>
          ])).toEqual(true);    
    });

    
    it('should render h6 with title class', ()=> {
        expect(wrapper.find('.title').exists()).toEqual(true);
    });




    
   

});