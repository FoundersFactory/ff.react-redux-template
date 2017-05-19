import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware  } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import appReducer from './reducers.js'

export default function configureStore(initialState) {
  return createStore(
    appReducer,
    composeWithDevTools(
      applyMiddleware(
        thunkMiddleware // lets us dispatch() functions
      )
    )
  )
}
