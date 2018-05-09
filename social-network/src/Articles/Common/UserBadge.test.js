import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserBadge from './UserBadge';
import MdBookmarkOutline from 'react-icons/lib/md/bookmark-outline';


configure({adapter: new Adapter()});

describe('UserBadge', ()=> {

    let wrapper,
        item = {description:"Test",
                link:"Test link",
                author: {
                    name: "Test Name"
                }};

    beforeEach(()=>{
        wrapper = shallow(<UserBadge item={item} colClass='Test'/>);
    });


    it('should render <MdBookmarkOutline /> element', ()=> {
        expect(wrapper.find(MdBookmarkOutline)).toHaveLength(1);    
    });

    
    it('should render span with Test class', ()=> {
        expect(wrapper.find('.user-badge').exists()).toEqual(true);
    });


    
   

});