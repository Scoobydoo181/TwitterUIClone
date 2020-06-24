import React, { Component } from 'react';

import NewsCard from './newsCard'
import LoginForm from './loginForm'
import SearchBar from './searchBar'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [
                {category: 'UK News', time: '39 minutes ago', headline: 'Killing of three people in Reading, UK declared a terrorist incident'},
                {category: 'US News', time: 'Last night', headline: 'Trump rally reported to have a much lower number of attendees than expected'},
                {category: 'US News', time: 'Last night', headline: 'NY federal prosecutor steps down following standoff with Attorney General Barr'},
                {category: 'US News', time: 'Yesterday', headline: 'Tulsa police arrest a woman on national television for allegedly trespassing outside BOK Center'},
                {category: 'US News', time: 'Last night', headline: 'One person is dead and another critically injured after a shooting in Seattle\'s CHOP'},
                {category: 'International Yoga Day', time: 'Last night', headline: 'Indian armed forces personnel perform yoga in the Himalayas near Indo-China border'},
                {category: 'Father\'s Day', time: '3 hours ago', headline: 'Messages for dads pour in as people celebrate Father\'s Day'},
                {category: 'News', time: 'Yesterday', headline: 'Nova Scotia killer\'s withdrawal of $475,000 was \'highly irregular,\' Maclean\'s reports'},
                {category: 'US news', time: 'June 20, 2020', headline: 'Protesters topple statue of Confederate General Albert Pike in Washington, DC'},
                {category: 'World news', time: 'Yesterday', headline: 'Thousands of people are expected to live stream the first virtual Stonehenge summer solstice'},
                {category: 'Los Angeles Times', time: 'June 19, 2020', headline: 'Viral photo highlights the problem with public spaces'},
                {category: 'Barron\'s', time: 'Yesterday', headline: 'The U.S. Wealth Gap Is Widening—And That\'s Bad For Everyone'},
                {category: 'US News', time: 'June 19, 2020', headline: 'Into The Wild bus removed from Alaska over safety concerns'},
            ]
        }

    }

    render() {
        return (
            <> 
                <SearchBar/>
                <div className="cardContainer">
                    {this.state.news.map( 
                        item => <NewsCard {...item} key={item.category + item.time + item.headline} />
                    ) }
                </div>
                <LoginForm/>

            </>
        )
    }
}