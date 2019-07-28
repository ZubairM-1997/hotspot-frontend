import React from 'react'
import { GoogleComponent } from 'react-google-location'


export default class SearchBar extends React.Component {

	render() {
		return(
		<div className="googleComponent">
         <GoogleComponent

          apiKey={"AIzaSyDXJow1kwlR8FoDR98HgVC7Q4ok8ZXaujM"}
          language={'en'}
          coordinates={true}
          onChange={this.props.changingTheState}
		  />
      </div>
		)
	}
}