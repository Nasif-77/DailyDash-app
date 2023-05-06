import {combineReducers} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import userReducer from './userSlice'

 const rootReducer = combineReducers({
    counter:counterReducer,
    user:userReducer,
})





export type Rootstate = ReturnType<typeof rootReducer>

export default rootReducer;