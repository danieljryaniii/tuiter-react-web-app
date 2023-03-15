import {createSlice} from "@reduxjs/toolkit";
import posts from '../data/posts.json';


const tuitsSlice = createSlice({
    name: "tuit",
    initialState: posts,
});

export default tuitsSlice.reducer;