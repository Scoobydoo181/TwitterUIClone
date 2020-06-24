import React, { Component } from 'react';

import favicon from 'public/favicon.ico'

export default class NewsCard extends Component {
    constructor(props) {
        super(props)
    }
    
    render() { 
        return (  
            <div className="newsCard">
                <div className="content">
                    <p>{this.props.category} · {this.props.time}</p>
                    <h3>{this.props.headline}</h3>
                </div>

                <div className="image">
                    <img src={favicon} alt="favicon" width="60" height="60"/>
                </div>
            </div>
        )
    }
}
 
 