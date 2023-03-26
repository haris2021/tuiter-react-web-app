import {createSlice} from "@reduxjs/toolkit";
import tuits from "./Tuits.json"

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
    "status":false
};


const tuitslice = createSlice({

    name:'tuits',
    initialState:tuits,
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



