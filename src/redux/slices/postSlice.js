import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../../service";

const initialState={
    posts:[],
    errors:null,
    selectedPost:null
}
const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_,{rejectWithValue})=>{
        try{
            const{data}=await postService.getAll();
            return data
        }catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getById = createAsyncThunk(
    'postSlice/getById',
    async ({id},{rejectedWithValue})=>{
        try {
            const {data}=await postService.getById(id);
            return data
        }catch (e) {
            return rejectedWithValue(e.response.data)
    }}
);

const postSlice= createSlice({
    name:'postSlice',
    initialState,
    reducers:{
        setSelectedPost:(state, action)=>{
            state.selectedPost= action.payload}
        },
        extraReducers:builder=>
            builder
                .addCase(getAll.fulfilled, (state, action)=>{
                    state.posts = action.payload
                })
                .addCase(getAll.rejected,(state, action)=>{
                    state.errors =action.payload
                })
                .addCase(getById.fulfilled,(state, action)=>{
                    state.selectedPost= action.payload
                })

});

const {reducer:postReducer, actions:{ setSelectedPost}}=postSlice;

const postAction={
    getAll, setSelectedPost, getById
}
 export {postAction, postReducer, postSlice}