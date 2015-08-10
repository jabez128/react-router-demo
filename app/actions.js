import {createActions} from "fynx"
import Store from "./store"

var Actions = createActions(
	[
	"add",
	"minus"
	])

Actions.add.listen(() => {Store().set("count",Store().get("count")+1)})

Actions.minus.listen(() => {Store().set("count",Store().get("count")-1)})

export default Actions