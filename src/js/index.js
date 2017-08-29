import { createStore } from "redux"

const reducer = (state, action) => {
	return "foo";
}

const store = createStore (reducer, 0)

store.subscribe(() => {
	console.log("State is changed ", store.getState())
})


store.dispatch({type: "INC", payload: 1})

