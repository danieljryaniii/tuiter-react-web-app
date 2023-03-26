import {createSlice} from "@reduxjs/toolkit";

const _initialState = {
    firstName: 'Dan',
    lastName: 'Ryan',
    handle: '@dryan',
    profilePicture: 'profile_picture.jpeg',
    bannerPicture: 'profile_banner.webp',
    bio: 'CPA turned Computer Scientist. Currently pursuing an MSCS at Northeastern. Passionate about software development. Recently "hired" to develop a new social networking application named',
    website: 'youtube.com/danryan',
    location: 'Boston, MA',
    dateOfBirth: '1995/07/01',
    dateJoined: '2023/01/01',
    followingCount: 340,
    followersCount: 223
}

const profileSlice = createSlice({
    name: "profile",
    initialState: _initialState,
    reducers: {
        updateProfileInfo(state, action) {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.website = action.payload.website;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
});

export const {updateProfileInfo} = profileSlice.actions;
export default profileSlice.reducer;
