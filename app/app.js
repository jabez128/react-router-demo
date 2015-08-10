var React = require("react")
var Router = require("react-router")
var Route = Router.Route
var DefaultRoute = Router.DefaultRoute
var NotFoundRoute = Router.NotFoundRoute
var RouteHandler = Router.RouteHandler

import Store from "./store.js"
import Actions from "./actions.js"

var initProps = {
	store: Store,
	actions: Actions
}

var Home = require("./components/home.js")
var Detail = require("./components/detail.js")
var NotFound = require("./components/notfound.js")

var App = React.createClass({
	render(){
		return (
			<div style={{"height":"100%"}}>
				<RouteHandler {...this.props}/>
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

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root {...initProps} />, document.body);
});