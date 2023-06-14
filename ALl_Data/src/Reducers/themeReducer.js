import { createSlice } from "@reduxjs/toolkit";



const userTheme = createSlice({
    name:"themeInfo",
    initialState :{
        data:{color:"light-theme"}
    },
    reducers:{
        changeTheme :(state, action)=>{
            state.data = action.payload
        }
    }
})
export const {changeTheme} = userTheme.actions
export default userTheme.reducer
