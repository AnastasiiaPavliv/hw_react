import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {userService} from "../../service";


const initialState={
    users:[],
    errors:null,
    loading:null,
    selectedUser:null,

};
const getAll=createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue} )=>{
     try {
         const {data}=await userService.getAll();
         return data
     }catch (e){
return rejectWithValue(e.response.data)
     }

    }
);
const getById =createAsyncThunk(
    'userSlice/getById',
    async ({id},{rejectedWithValue})=>{

try {
    const {data}=await userService.getById(id);
    return data
}catch (e) {
    return rejectedWithValue(e.response.data)
}

})


const usersSlice=createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        setSelectedUser:(state, action)=>{
       state.selectedUser= action.payload
        }
    },
    // extraReducers: {
    //     [getAll.fulfilled]: (state, action) => {
    //         state.loading= false
    //         state.users = action.payload
    //     },
    //     [getAll.rejected]: (state, action)=>{
    //         state.loading= false
    //       state.errors =action.payload
    //     },
    //     [getAll.pending]: (state)=>{
    //         state.loading= true
    //     }
    // }
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.loading= false
                        state.users = action.payload
            })
            .addCase(getAll.rejected,(state, action)=>{
           state.loading= false
           state.errors =action.payload
          })
            .addCase(getAll.pending, state => {
                state.loading= true
            })
            .addCase(getById.fulfilled,(state, action)=>{
               state.selectedUser= action.payload
            })
});
const {reducer:userReducer, actions:{ setSelectedUser}}= usersSlice;

const userActions={
     setSelectedUser ,getAll, getById
};
export {userActions, userReducer, usersSlice}