import React from 'react';
import './BodyText.css';
import PropTypes from 'prop-types';



function goToAddress(link) {
    return () => window.open(link);
}


const BodyText = (props) => {
    return <span className="body-text"  onClick={goToAddress(props.item.link)}>{props.item.description}</span>
}

BodyText.propTypes = {
    item: PropTypes.object.isRequired
}

export default BodyText;