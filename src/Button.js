import React, { Component } from 'react'

class Button extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			hover: false
		}
	}
	
	onMouseEnter = () => {
		this.setState({
			hover: true
		})
	}
	
	onMouseLeave = () => {
		this.setState({
			hover: false
		})
	}
	
	render() {
		return (
			<div className={"Button " + (this.state.hover ? 'lighten' : 'delighten')}
				onClick={this.props.onClick}
				value={this.props.value}
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}
			>
				{this.props.label}
			</div>
		)
	}
	
}

export default Button