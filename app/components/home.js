var React = require("react")

var Home = React.createClass({	
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
			</div>
		)
	}
})

module.exports = exports = Home