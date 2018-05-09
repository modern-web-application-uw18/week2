import React from 'react';
import './ImageBox.css';
import PropTypes from 'prop-types';



function goToAddress(link) {
    return () => window.open(link);
}


const ImageBox = (props) => {
    return (
        <div className={props.colClass} onClick={goToAddress(props.item.link)}>
            <div className="image-box-missed" style={{ backgroundImage: `url(${props.item.image})` }}>
            </div>
        </div>
    )
    

}

ImageBox.propTypes = {
    item: PropTypes.object.isRequired,
    colClass: PropTypes.string.isRequired
}

export default ImageBox;