import React from 'react';
// import Author from './Author.js';
// import Title from './Title.js';

// class Card extends Component {

  const Card = ({ article: {title, link, image, description, author, postedDate, minutesToRead, hasAudioAvailable, memberPreview} }) =>
  (
    <div className='card'>
      <img className="Card-img" alt="stuff" src={image} />
      <div className='titleAuthorContainer'>
        <h3>{title}</h3>
        <h6>{description}</h6>
        <div className='authorContainer'>
          <img className='authorImage' src={author.image} alt='' />
          <div className='authorPostDate'>
            <h6>{author.name}</h6>
            <h6>{convertTime({postedDate})} . {minutesToRead} min read</h6>
          </div>
          <div className = 'bookmark'>
            <svg className="svgIcon-use" width="25" height="25" viewBox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fillRule="evenodd"></path></svg>
          </div>
        </div>
      </div>

    </div>
  )

function convertTime(date) {
  let month = date.postedDate.substring(5,7);
  let day = date.postedDate.substring(8,10);
  if(month === '03'){
    return 'Mar ' + day;
  }
  else if(month === '04'){
    return 'Apr ' + day;
  }
  else { return 'idunno';}

}

export default Card;

// <Author author={author} />
