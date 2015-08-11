import Store from "./store.js"
import Actions from "./actions.js"
import React from "react"
import Router from "react-router"

var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var NotFoundRoute = Router.NotFoundRoute
var RouteHandler = Router.RouteHandler



var initProps = {
	store: Store,
	actions: Actions
}

var Home = require("./components/home.js")
var Detail = require("./components/detail.js")
var NotFound = require("./components/notfound.js")

var App = React.createClass({
	getInitialState(){
		return {
			"temp": this.props.store().toJSON()
		}
	},
	componentDidMount(){
		this.props.store.listen((data)=>{
			this.setState({"temp": data.toJSON()})
		})
	},
	render(){
		return (
			<div style={{"height":"100%"}}>
				<RouteHandler {...this.state.temp} actions={this.props.actions} />
				}

			</div>
		)
	}
})
var routes = (
  <Route path="/" handler={App}>
    <Route name="home" path="home" handler={Home}/>
    <Route name="detail" path="detail" handler={Detail}>
    	<Route path=":name" handler={Detail}/>
    	<NotFoundRoute handler={Detail}/>
    </Route>
    <DefaultRoute handler={Home}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root {...initProps} />, document.body);
});