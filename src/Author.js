import React from 'react';

const Author = ({ author: {name, image, isMediumMember} }) =>

(
  <div>
    <img className='authorImage' src={image} alt='' />
    <div>
      <h6>{name}</h6>

    </div>
  </div>
)

export default Author;

// <h6>{postedDate}</h6>
