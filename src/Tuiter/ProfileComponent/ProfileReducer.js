import {createSlice} from "@reduxjs/toolkit";
import profiledata from "./ProfileData.json"

const ProfileSlice = createSlice({

    name:'profile',
    initialState:profiledata,
    reducers:{
                 editprofile(state,action)
                {
                    const { lastName, bio, website, dateOfBirth } = action.payload;
                    state[0] = {
                        ...state[0],
                        lastName,
                        bio,
                        website,
                        dateOfBirth,
                    };
                }
    }

});

export const{editprofile} = ProfileSlice.actions;
export default ProfileSlice.reducer;
