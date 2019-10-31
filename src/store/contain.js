import {combineReducers} from 'redux'
import addReducer from './reducer'
import subReducer from './lessReducer'
const Reducers=combineReducers({
    addReducer,
    subReducer
})
export default Reducers