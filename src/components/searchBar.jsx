import React, { Component } from 'react';

import whiteLogo from 'public/whiteTwitterLogo.png'
import magnifyingGlass from 'public/whiteMagnifyingGlass.png'

export default class SearchBar extends Component {
    render() { 
        return (
          <div className="searchBar">
            <img src={whiteLogo} alt="White Twitter Logo" height="40" width="40"/>

            <form className="searchForm" action="">
                <img src={magnifyingGlass} alt="Magnifying Glass" height="20" width="20"/>
                <input type="text" placeholder="Search Twitter"/>
            </form>

            <button className="hollowButton">Log in</button>
            
            <button className="solidButton">Sign up</button>

          </div>
        );
    }
}
 
