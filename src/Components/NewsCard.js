import React from 'react'

export default class NewsCard extends React.Component {
	render(){
		return(
		<div class="newsCard">
			<div className="topStory">
				<div className="topStoryTitle">
						<h2>{this.props.topStory.title}  </h2>
					</div>

					<div className="topStoryImage">
						<img className="image" src={`${this.props.topStory.urlToImage}`} />

					</div>

					<div className="topStoryURL">
						<a href={`${this.props.topStory.url}`}>Click Here</a>
					</div>

					<div className="topStoryInfo">
						<h4>{this.props.topStory.author} | {this.props.topStory.publishedAt} </h4>
					</div>


					<div className="topStoryText">
						<span>{this.props.topStory.description}</span>
					</div>
			</div>

		</div>
		)
	}
}