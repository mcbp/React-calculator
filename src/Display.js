import React, { Component } from 'react'

class Display extends Component {
	
	componentDidUpdate() {
		if (this.props.fadeOutDue) {

		}
	}
	
	render() {
		return (
			<div className="Display">
				<div className={"Display-tag"}><p>Display</p></div>
				<p className={
					"Display-text "
					+ (this.props.fadeOutDue ? 'fade-out' : '')
					+ " " + (this.props.fadeInDue ? 'fade-in' : '')
				}>
					{this.props.operations.join('')}
				</p>
			</div>
		)
	}
	
}

export default Display