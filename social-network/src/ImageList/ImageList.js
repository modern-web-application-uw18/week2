import React, {Component} from 'react';
import ProptTypes from 'prop-types';

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
        
          const imagesList = images.map((f,idx) => <img className="cardStyle" key={`f.$key`} src={f}/>)  
        return (
            <div>
                {imagesList}
            </div>
        )
    }
}

ImageList.propTypes = propTypes;
export default ImageList;