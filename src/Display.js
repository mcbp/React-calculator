import React, { Component } from 'react'

class Display extends Component {
	
	componentDidUpdate() {
		if (this.props.fadeOutDue) {

		}
	}
	
	render() {
		return (
			<div className="Display">
				<p className={
					(this.props.fadeOutDue ? 'fade-out' : '')
					+ " " + (this.props.fadeInDue ? 'fade-in' : '')
				}>
					{this.props.operations.join('')}
				</p>
			</div>
		)
	}
	
}

export default Display