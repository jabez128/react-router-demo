var React = require("react")
var Navigation = require('react-router').Navigation;


var Detail = React.createClass({	
	mixins: [Navigation],
	getInitialState(){
		return {
			"name": "无名"
		}
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
			</div>
		)
	}
})

module.exports = exports = Detail