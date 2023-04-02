import {createSlice} from "@reduxjs/toolkit";
/*
import tuits from "./Tuits.json"
*/

import {findTuitsThunk} from "../../Service/tuits-thunks.js";

import {DeleteTuitThunk} from "../../Service/tuits-thunks.js";

import {AddNewTuitThunk} from "../../Service/tuits-thunks.js"

import {UpdateTuitThunk} from "../../Service/tuits-thunks.js"

const initialStateoftuits = {
    tuits: [],
    loading: false
}


const CurrentUser ={
    "UserName":"Nasa",
    "Handle":"Nase@",
    "image":"https://i.pinimg.com/originals/62/4d/f0/624df0abe304bb27a03407b47b3317d9.png"
};

const templateTuit = {
    ...CurrentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes" : 0,
    "status":false
};


const tuitslice = createSlice({

    name:'tuits',
    initialState:initialStateoftuits,

                                  extraReducers: {
                                      [findTuitsThunk.pending]:
                                          (state) => {
                                              state.loading = true
                                              state.tuits = []
                                          },
                                      [findTuitsThunk.fulfilled]:
                                          (state, { payload }) => {
                                              state.loading = false
                                              state.tuits = payload
                                          },
                                      [findTuitsThunk.rejected]:
                                          (state, action) => {
                                              state.loading = false
                                              state.error = action.error
                                          },
                                      [DeleteTuitThunk.fulfilled]:
                                          (state,{payload}) =>{
                                            state.loading=false;
                                            state.tuits = state.tuits.filter( t => t._id !== payload)
                                          },
                                      [AddNewTuitThunk.fulfilled]:
                                          (state,{payload}) =>{
                                          state.loading = false;
                                          console.log("Inside reducer" + {payload})
                                              const newtuits = {
                                                  ...templateTuit,
                                                  ...payload
                                              }
                                              console.log("Inside reducer" + newtuits)

                                              state.tuits.push(newtuits)

                                          },
                                      [UpdateTuitThunk.fulfilled]:
                                          (state,{payload}) =>
                                          {
                                              state.loading=false;
                                              let index = state.tuits.findIndex( (t) => t._id === payload._id);
                                              console.log("Found tuit to be updated" + index);
                                              state.tuits[index] = {
                                                  ...state.tuits[index],
                                                  ...payload
                                              }
                                          }


                                  },

                                  reducers: {

        createTuit(state,action)
        {
           /* console.log({
                            ...action.payload,
                            ...templateTuit,
                            _id: (new Date()).getTime(),
                        });*/

            state.unshift(({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            }));

        },
        deltweet(state,action)
        {
             let index = state.findIndex(tuits => tuits._id === action.payload);
             state.splice(index,1)
        },
        IncreaseLikes(state,action)
        {
            let index = state.findIndex(tuits => tuits._id === action.payload);
            state[index].likes = state[index].likes +1;
        },
        DecreaseLikes(state,action)
        {
            let index = state.findIndex(tuits => tuits._id === action.payload);
            state[index].likes = state[index].likes -1;
        }

    }
});

export const {createTuit,deltweet,IncreaseLikes,DecreaseLikes} = tuitslice.actions
export default tuitslice.reducer



