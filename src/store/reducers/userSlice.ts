import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Rootstate } from "./index";

interface userState {
    password: string,
    email: string
}

const initialState: userState = {
    password: '12345678',
    email: 'nasifpe77@gmail.com'
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        }
    }
})


export const { setPassword, setEmail } = userSlice.actions

export const selectEmail = (state: Rootstate) => state.user.email
export const selectPassword = (state: Rootstate) => state.user.password

export default userSlice.reducer