import React, {Component} from 'react';
import ProptTypes from 'prop-types';
import './ImageList.css';

const propTypes = {
    images: ProptTypes.array
}

class ImageList extends Component {
    
    render () {
        const images = [
            "https://media-cdn.tripadvisor.com/media/photo-s/0e/36/8e/78/variety-of-pinball-machines.jpg",
            "https://s3-ap-southeast-1.amazonaws.com/wwwsecondhandhk/items/pinball-machines-for-sale-0-0-1.jpg",
            "https://s3.amazonaws.com/images.hagerty.com/vehicle/web/1961FerrariCaliforniaMonterey.jpg",
          ]
        
        const imagesList = images.map((f,idx) => {
            return (
                <div className="">
                    <img className="cardStyle imageStyle" key={idx} alt={`Image $key`} src={f}/>
                    <p>some text</p>
                </div>
            )
        })
        
        return (
            <div>
                {imagesList}
                <p>some more text</p>
            </div>
        )
    }
}

ImageList.propTypes = propTypes;
export default ImageList;