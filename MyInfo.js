import React from 'react';

class MyInfo extends React.Component{
	constructor(){
		super();
		this.state={
			count: 0
		}
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.setState(tate => {
			return{
					count: tate.count + 1
				}
		})
	}

	render(){
		return(
			<div>
				<h1>{this.state.count}</h1>
				<button onClick ={this.handleClick}> Change!</button>
			</div>
		)
	}
}

export default MyInfo