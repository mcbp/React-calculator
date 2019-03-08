import React, { Component } from 'react'

class Footer extends Component {

	render() {
		
		var footerStyle = {
			position: 'fixed',
			bottom: '0',
			width: '100%',
			backgroundColor: '#222',
			textAlign: 'center',
			padding: '2px',
			fontSize: '0.5em',
		}
		
		var linkStyle = {
			color: '#fff',
			textDecoration: 'none'
		}
		
		return (
			<footer style={footerStyle}>
				<a style={linkStyle} href="https://github.com/mcbp" target="_blank"><i className="fab fa-github"></i> mcbp</a>
			</footer>
		)
		
	}
}

export default Footer
