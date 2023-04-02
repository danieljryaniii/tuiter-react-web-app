import {createSlice} from "@reduxjs/toolkit";
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../../services/tuit-thunks";

const initialState = {
    tuits: [],
    loading: false
};

const currentUser = {
    "userName": "NASA",
    "handle": "NASA",
    "avatarIcon": "nasa.jpeg",
    "verified": true,
};

const tuitFeedSlice = createSlice({
    name: "tuitData",
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true;
                state.tuits = [];
            },

        [findTuitsThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.tuits = payload;
            },

        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false;
                state.error = action.error;
            },

        [deleteTuitThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.tuits = state.tuits.filter(t => t._id !== payload);
            },

        [createTuitThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                state.tuits.push({...currentUser, ...payload});
            },

        [updateTuitThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false;
                const index = state.tuits.findIndex(t => t._id === payload._id);
                state.tuits[index] = {...state.tuits[index], ...payload};
            }
    },
    reducers: { }
});

export default tuitFeedSlice.reducer;