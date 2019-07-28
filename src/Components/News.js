import React from 'react'
import NewsCard from './NewsCard'

export default class News extends React.Component {

	state = {
		articles: ""
	}

	componentDidUpdate(prevProps, prevState) {

		if (prevProps.countryCode !== this.props.countryCode) {
			fetch(`https://newsapi.org/v2/top-headlines?language=en&country=${this.props.countryCode}&category=technology&apiKey=d205b6460c8243bfb21aad81b5f98ade`)
			.then(resp => resp.json())
			.then((data) => this.temp(data.articles[0]))

		}

	}

	temp = (data) => {
		this.setState({
			articles: data
		})

	}



	render(){
		return(
		<div className="news">
			<NewsCard topStory={this.state.articles} />
		</div>




		)
	}
}