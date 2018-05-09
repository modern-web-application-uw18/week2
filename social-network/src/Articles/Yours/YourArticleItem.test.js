import React from 'react';
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import UserBadge from '../Common/UserBadge';
import Title from '../Common/Title';
import BodyText from '../Common/BodyText';
import ImageBox from '../Common/ImageBox';
import YourArticleItem from './YourArticleItem';


configure({adapter: new Adapter()});

describe('YourArticleItem', ()=> {

    let wrapper,
        item = {description:"Test",
                link:"Test link",
                author: {
                    name: "Test Name"
                }},
        lnBreak = 1;

    beforeEach(()=>{
        wrapper = shallow(<YourArticleItem item={item} lnBreak={lnBreak}/>);
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