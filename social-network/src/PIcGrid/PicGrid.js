import React from 'react';
import './PicGrid.css';

const grid = (props) => {
    return (
        <div className={props.grid}>
          <img src={props.list} alt="card"/>  
        </div>
    );
}

export default grid;