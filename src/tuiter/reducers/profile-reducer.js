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
    dateOfBirth: '07/01/1995',
    dateJoined: '01/01/2023',
    followingCount: 340,
    followersCount: 223
}

const profileSlice = createSlice({
    name: "profile",
    initialState: _initialState,
});

export default profileSlice.reducer;
