import React from 'react';

const Title = ({ article: {title, description, author, postedDate, minutesToRead} }) =>
(
  <div>
    <div>
      <div>
        <h3>{title}</h3>
      </div>
    </div>
  </div>
)

  export default Title;
