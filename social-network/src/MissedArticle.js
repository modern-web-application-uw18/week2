import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './missed-style.css'; //css

class MissedArticle extends Component {
    render(){
        const missedArticle = this.props.article;
        return(
            <div className="Missed-Article-main" key>
                <div className="Missed-Article-img-container">
                    <img className="Missed-Article-img" src={missedArticle.image} alt={MissedArticle["title"]} />
                </div> {/*end img-container*/}
                <div className="Missed-Article-container">
                    <a href={missedArticle.link}>
                    <header className="Missed-Article-header">{missedArticle.title}</header></a> {/*header is encapsulated by a tag*/}
                    <div className="Missed-Article-description">
                        <p>{missedArticle.description}</p>
                    </div> {/*end description*/}
                    <div className="Missed-Article-author-main">
                        <div className="Missed-Author-img">
                        <img src={missedArticle.author["image"]} alt={missedArticle.author["name"]} />
                        </div>{/*end author img div*/}
                        <div className="Missed-Article-name">
                        <p>{missedArticle.author["name"]}</p>
                        </div> {/*end Missed Article name*/}
                    </div> {/*end missed article author main*/}

                </div> {/*/end Missed Article container*/}

            {/* END MAIN */} </div>
        );
    }
}

//PropTypes

MissedArticle.propTypes = {
    article: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        link:PropTypes.string,
        description: PropTypes.string,
        author: PropTypes.shape({
            image:PropTypes.string,
            name: PropTypes.string
        })


    })
}; //end MissedArticle PropTypes

//export MissedArticle

export default MissedArticle;