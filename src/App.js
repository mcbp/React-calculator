import React, { Component } from 'react'
import math from 'mathjs'
import Display from './Display'
import Button from './Button'

class App extends Component {
	
	constructor(props) {
		super(props)
		this.state = {
			operations: []
		}
	}
	
	handleClick = e => {
		const value = e.target.getAttribute('value')
		
		switch(value) {
			case 'C':
				this.setState({ operations: [] })
				break;
				
			case '←':
			const newOperations = this.state.operations.slice(0,-1)
				this.setState({ operations: newOperations })
				break;
				
			case '=':
				this.performCalculation()
				break;
			
			default:
				this.setState({ operations: [...this.state.operations, value] })
				break
		}
		
	}
	
	performCalculation = () => {
		let result = this.state.operations.join('')
		if (result) {
			result = math.eval(result)
			result = math.format(result, { precision: 14})
			result = String(result)
			this.setState({
				operations: [result]
			})
		}
	}
	
	render() {
		return (
			<div className="App">
			
				<Display operations={this.state.operations} />
			
				<Button onClick={this.handleClick} label="C" value="C"/>
				<Button onClick={this.handleClick} label="←" value="←"/>
				<Button onClick={this.handleClick} label="÷" value="÷"/>
				
				<Button onClick={this.handleClick} label="7" value="7"/>
				<Button onClick={this.handleClick} label="8" value="8"/>
				<Button onClick={this.handleClick} label="9" value="9"/>
				<Button onClick={this.handleClick} label="9" value="*"/>
				
				<Button onClick={this.handleClick} label="4" value="4"/>
				<Button onClick={this.handleClick} label="5" value="5"/>
				<Button onClick={this.handleClick} label="6" value="6"/>
				<Button onClick={this.handleClick} label="-" value="-"/>
				
				<Button onClick={this.handleClick} label="1" value="1"/>
				<Button onClick={this.handleClick} label="2" value="2"/>
				<Button onClick={this.handleClick} label="3" value="3"/>
				<Button onClick={this.handleClick} label="+" value="+"/>
				
				<Button onClick={this.handleClick} label="0" value="0"/>
				<Button onClick={this.handleClick} label="." value="."/>
				<Button onClick={this.handleClick} label="=" value="="/>
			  
			</div>
		)
	}
  
}

export default App;
