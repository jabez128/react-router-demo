var React = require("react")
var Navigation = require('react-router').Navigation;


var Detail = React.createClass({	
	mixins: [Navigation],
	getInitialState(){
		return {
			"name": "无名",
			"count": this.props.store().get('count')
		}
	},
	handleAdd(){
		console.log('add');
		this.props.actions.add()
		this.setState({'count': this.props.store().get('count')})
	},
	handleMinus(){
		console.log('minus');
		this.props.actions.minus()
		this.setState({'count': this.props.store().get('count')})
	},
	componentWillMount(){
		console.log(this.props.params.name)
		if(this.props.params.name != undefined){
			this.setState({
				"name": this.props.params.name,
				"action": this.props.query.action
			})
		}
	},

	render(){
		return (
			<div style={{"height":"100%","backgroundColor":"#f1c40f","paddingTop":"20px"}}>
				<h1>This is detail page</h1>
				<h1>你好，{this.state.name}</h1>
				<h1>{this.state.action}</h1>
				<div style={{"padding":"30px","textAlign":"center"}} onClick={() =>{this.transitionTo("home")}}>
					Transition
				</div>
				<h1>{this.state.count}</h1>
				<div style={{"textAlign":'center'}}>
					<button onClick={this.handleAdd}>Add</button>
					<br/>
					<button onClick={this.handleMinus}>Minus</button>
				</div>
			</div>
		)
	}
})

module.exports = exports = Detail