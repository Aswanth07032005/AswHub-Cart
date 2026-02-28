import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"userSlice",
    initialState:{
        users:JSON.parse(localStorage.getItem("users"))||[],
        user:JSON.parse(localStorage.getItem("user"))|| null,
        isAuthentication:JSON.parse(localStorage.getItem("isAuthentication"))||false,
    },
    reducers:{
    registerUser:(state,action)=>{
        state.users.push(action.payload);
        localStorage.setItem("users",JSON.stringify(state.users));
    },
    loginUser:(state,action)=>{
        state.user = action.payload;
        state.isAuthentication = true;
        localStorage.setItem("user",JSON.stringify(state.user));
        localStorage.setItem("isAuthentication",JSON.stringify(state.isAuthentication));
    },
    logoutUser:(state)=>{
      state.user = null
      state.isAuthentication = false
      localStorage.removeItem("user")
      localStorage.removeItem("isAuthentication")
     
      
    }  
    ,
       userUpdateRole:(state,action)=>{
            const findUserIndex = state.users.findIndex((item)=>(
                item.id === action.payload.id
            ))
            if (findUserIndex  !==-1) {
                state.users[findUserIndex].role = (action.payload.role);
                localStorage.setItem("users",JSON.stringify(state.users))
            }
            if (state.user.id === action.payload.id ) {
                state.user.role === action.payload.role
               localStorage.setItem("user",JSON.stringify(state.user))
            }
              
        },
         userUpdateStatus:(state,action)=>{
            const findUserIndex = state.users.findIndex((item)=>(
                item.id === action.payload
            ))
            if (findUserIndex  !==-1) {
                state.users[findUserIndex].status = !state.users[findUserIndex].status;
                localStorage.setItem("users",JSON.stringify(state.users))
            }
            if (state.user.id === action.payload ) {
                state.user.status = !state.user.status;
               localStorage.setItem("user",JSON.stringify(state.user))
            }
              
        },
        updateUser:(state,action)=>{
          
        const findDetails = state.users.findIndex((item)=>(
            item.id === action.payload.id
        ))
        
        if (!findDetails) {
            state.users[findDetails] = action.payload
            localStorage.setItem("users",JSON.stringify(state.users))
        }
        
        if (state.user.id=== findDetails.id ){
            state.user.password = action.payload.password
          localStorage.setItem("user",JSON.stringify(state.user))
        }
        }
    }
})

export default userSlice.reducer
export const {registerUser,loginUser,updateUser,logoutUser,userUpdateStatus,userUpdateRole} = userSlice.actions