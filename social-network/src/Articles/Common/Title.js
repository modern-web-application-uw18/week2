import React from 'react';
import './Title.css';
import PropTypes from 'prop-types';



function goToAddress(link) {
    return () => window.open(link);
}


const Title = (props) => {
    return <h6 className="title" onClick={goToAddress(props.item.link)}>{props.item.title}</h6>
}

Title.propTypes = {
    item: PropTypes.object.isRequired
}

export default Title;