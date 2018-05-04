import React,{Component} from 'react';
import Card from '../Card/Card';
import MissedArticles from '../data/missed-articles.json';
import YourArticles from '../data/missed-articles.json';

export default class Cardlist extends Component {
    render() {
      const listItems = MissedArticles.map((item) => {
        const { link, image, description, title, author, postedDate, minutesToRead } = item;
        return <Card link={link} image={image} description={description} title={title} author={author} postedDate={postedDate} minutesToRead={minutesToRead} />;
      });
			const yourListItems = YourArticles.map((item) => {
				const { link, image, description, title, author, postedDate, minutesToRead } = item;
				return <Card link={link} image={image} description={description} title={title} author={author} postedDate={postedDate} minutesToRead={minutesToRead} />;
			});

        return (
					<div>
						{listItems}
						{yourListItems}
					</div>
        );
    }
}
