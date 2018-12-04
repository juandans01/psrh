import { combineReducers } from 'redux'
import lang from './reducers/lang'

const rootReducer = combineReducers({
  app: combineReducers({
    lang
  })
})

export default rootReducer
