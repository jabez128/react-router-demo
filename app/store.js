import {createCursorStore} from 'fynx'
import {fromJS} from 'immutable'

var Store = createCursorStore(fromJS({"count": 0,"array":[1,2,3]}))
Store.listen((data) => {console.log(data.toJSON())})

setTimeout(() => {
	Store().get("array").push(4)
},2000)

export default Store