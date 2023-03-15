import {createSlice} from "@reduxjs/toolkit";
import tuits from '../tuits/tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "NASA",
    "avatarIcon": "nasa.jpeg",
    "verified": true,
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
};

const tuitFeedSlice = createSlice({
    name: "tuit-feed",
    initialState: tuits,
    reducers: {
        likeToggle(state, action) {
            const tuit = state.find(tuit => tuit._id === action.payload._id);
            tuit.likes = tuit.liked ? tuit.likes - 1 : tuit.likes + 1;
            tuit.liked = !tuit.liked;
        },

        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date().getTime()),
            })
        },

        deleteTuit(state, action){
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        }
    }
});

export const {likeToggle, createTuit, deleteTuit} = tuitFeedSlice.actions;
export default tuitFeedSlice.reducer;