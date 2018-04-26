import React from 'react';
import './PicGrid.css';

const topGrid = (props) => {
    return (
        <div className={props.grid}>
          <img src={props.list}/>  
        </div>
    );
}

export default topGrid;