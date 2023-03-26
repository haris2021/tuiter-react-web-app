import tuits from "../Tuits/Tuits.json"
import {createSlice} from "@reduxjs/toolkit";

const TuitSlice = createSlice({name:'tuits', initialState:tuits})

export default TuitSlice.reducer;


