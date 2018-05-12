import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    data: PropTypes.objectOf(PropTypes.number),
    title: PropTypes.string,
    img: PropTypes.string,
}

class YourMissedArticles extends Component {
    constructor() {
        super();
        this.state = {
            data:
                [
                    {
                        "title": "What Would Happen If You Did These Things Every Day...",
                        "description": "For thirty days...",
                        "image": "https://cdn-images-1.medium.com/max/800/1*NosScbnZp8m_clHHaPQ3mg.jpeg",
                        "link": "https://entrepreneurs.maqtoob.com/what-would-happen-if-you-did-these-things-every-day-7e39f62a6335",
                        "author": {
                            "name": "Alex Mathers",
                            "image": "https://cdn-images-1.medium.com/fit/c/80/80/1*wsP97tix16onOIkq4STxuw.jpeg",
                            "isMediumMember": true
                        },
                        "postedDate": "2018-04-22T07:00:00.000Z",
                        "minutesToRead": 3,
                        "hasAudioAvailable": false,
                        "memberPreview": false
                    },
                    {
                        "title": "10 Strategies for Creating Viral and Powerful Content",
                        "description": "",
                        "image": "https://cdn-images-1.medium.com/max/800/0*jxP3G649xndI9S_m.",
                        "link": "https://medium.com/@zdravko/10-strategies-for-creating-viral-and-powerful-content-b4ce7bbb4904",
                        "author": {
                            "name": "Zdravko Cvijetic",
                            "image": "https://cdn-images-1.medium.com/fit/c/80/80/1*0OAF2WviyXwa7MuRKtKUpA@2x.jpeg",
                            "isMediumMember": true
                        },
                        "postedDate": "2018-04-22T07:00:00.000Z",
                        "minutesToRead": 6,
                        "hasAudioAvailable": false,
                        "memberPreview": false
                    },
                    {
                        "title": "Useful Tools for Writers",
                        "description": "Jumpstart your process.",
                        "image": "https://cdn-images-1.medium.com/max/800/1*Msq_1dsr2maPq3ujjTVu3w.jpeg",
                        "link": "https://medium.com/@jaxonleerose/useful-tools-for-writers-46eb0736d660",
                        "author": {
                            "name": "JLRose",
                            "image": "https://cdn-images-1.medium.com/fit/c/80/80/1*-W7euf25bzL36c83YA5qeQ.jpeg",
                            "isMediumMember": true
                        },
                        "postedDate": "2018-04-21T07:00:00.000Z",
                        "minutesToRead": 8,
                        "hasAudioAvailable": false,
                        "memberPreview": true
                    }
                    
                ]
        }
    }
    render() {
        return (
            <div >
                {this.state.data.map((title, i) => <InnerContent key={i}
                    data={title} />)}
            </div>
        );
    }
}
class InnerContent extends Component {
    render() {
        return (
            <div className='container'>
                <a href={this.props.data.link}><img src={this.props.data.image} className='img' alt='Default article view'></img></a>
                <div className='.article'>
                    <a href={this.props.data.link}><p className='title'>{this.props.data.title}</p></a>
                    <a href={this.props.data.link}><p className='fontLight uiScale'>{this.props.data.description}</p></a>
                </div>
                <div className='aboutArticle'>
                    <img src={this.props.data.author.image} className='authorImg' alt='Profile for Author'></img>
                    <p className='fontMedium'>{this.props.data.author.name}</p>
                </div>
            </div>
        );
    }
}

YourMissedArticles.propTypes = propTypes;

export default YourMissedArticles;
