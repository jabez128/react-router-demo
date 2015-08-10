import React from "react"

var Home = React.createClass({	
	getInitialState(){
		return {
			'count': this.props.count,
			"array": this.props.array
		}
	},
	componentWillReceiveProps(nextProps){
		console.log(nextProps)
		this.setState({
			'count': nextProps.count,
			"array": nextProps.array	
		})
	},
	handleAdd(){
		console.log('add');
		this.props.actions.add()
		//this.setState({'count': this.props.store().get('count')})
	},
	handleMinus(){
		console.log('minus');
		this.props.actions.minus()
		//this.setState({'count': this.props.store().get('count')})
	},
	render(){
		return (
			<div style={{"height":"100%","backgroundColor":"#3498db","paddingTop":"20px"}}>
				<h1>This is home page</h1>
				<ul style={{"textAlign":"center"}}>
					<li><a href="#/detail/周董?action=诶哟,不错哦">周董</a></li>
					<li><a href="#/detail/那英">那英</a></li>
					<li><a href="#/detail/汪峰">汪峰</a></li>
					<li><a href="#/detail/哈林">哈林</a></li>
					<li><a href="#/detail/">Who</a></li>
				</ul>
				<h1>{this.state.count}</h1>
				<div style={{"textAlign":'center'}}>
					<button onClick={this.handleAdd}>Add</button>
					<br/>
					<button onClick={this.handleMinus}>Minus</button>
				</div>
				<h1>{this.state.array}</h1>
			</div>
		)
	}
})

module.exports = exports = Home