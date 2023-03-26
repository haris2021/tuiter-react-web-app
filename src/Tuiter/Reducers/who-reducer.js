import whoarray from "../Data/who.json"
import {createSlice} from "@reduxjs/toolkit";

const WhoSlice = createSlice({
                                        name:"who",
                                        initialState:whoarray
                             });

export default WhoSlice.reducer



