import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserBadge from '../Common/UserBadge';
import Title from '../Common/Title';
import BodyText from '../Common/BodyText';
import ImageBox from '../Common/ImageBox';
import MissedArticleItem from './MissedArticleItem';


configure({adapter: new Adapter()});

describe('MissedArticleItem', ()=> {

    let wrapper,
        item = {description:"Test",
                link:"Test link",
                author: {
                    name: "Test Name"
                }};

    beforeEach(()=>{
        wrapper = shallow(<MissedArticleItem item={item} colClass='Test'/>);
    });


    it('should render <ImageBox /> element', ()=> {
        expect(wrapper.find(ImageBox)).toHaveLength(1);    
    });

    it('should render <Title /> element', ()=> {
        expect(wrapper.find(Title)).toHaveLength(1);    
    });

    it('should render <BodyText /> element', ()=> {
        expect(wrapper.find(BodyText)).toHaveLength(1);    
    });

    it('should render <UserBadge /> element', ()=> {
        expect(wrapper.find(UserBadge)).toHaveLength(1);    
    });



    
   

});