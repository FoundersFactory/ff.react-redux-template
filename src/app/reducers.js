import { combineReducers } from 'redux'

// recursively search through all folders for .reducer.js file and get exported reducer from each
// each reducer will be named in the store as per its file name, eg. home.reducer.js will be state.home
import * as reducers from 'glob:./**/*.reducer.js'

const appReducer = combineReducers({
  ...reducers
})

export default appReducer

