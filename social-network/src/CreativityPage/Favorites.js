import React, { Component } from 'react';

class Favorites extends Component {
    render() {
        return (
            <svg width="25" height="25" viewBox="0 0 25 25">
                <path d={
                    (
                    'M 19 6 c 0 -1.1 -0.9 -2 -2 -2 H 8 c -1.1 0 -2 0.9 -2 2 v 14.66 h 0.012 c 0.01 0.103 0.045 0.204 0.12 0.285 a 0.5 0.5 0 0 0 0.706 0.03 L 12.5 16.85 l 5.662 4.126 a 0.508 0.508 0 0 0 0.708 -0.03 a 0.5 0.5 0 0 0 0.118 -0.285 H 19 V 6 Z m -6.838 9.97 L 7 19.636 V 6 c 0 -0.55 0.45 -1 1 -1 h 9 c 0.55 0 1 0.45 1 1 v 13.637 l -5.162 -3.668 a 0.49 0.49 0 0 0 -0.676 0 Z'
                    )
                } fillRule='evenodd'></path>
            </svg>
        );
    }
}

export default Favorites;