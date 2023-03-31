import {createAsyncThunk} from "@reduxjs/toolkit"

import * as service from "./tuits-service"



export const findTuitsThunk = createAsyncThunk('tuits/findTuits', async () => await service.FindTuit())

export const DeleteTuitThunk = createAsyncThunk('tuits/DeleteTuit', async(tuitId)=> {
    await service.DeleteTuit(tuitId)
    return tuitId
} )

export const AddNewTuitThunk = createAsyncThunk('tuits/NewTuit', async (tuit)=>{

    const newtuit = await service.CreateTuit(tuit)
    return newtuit
})

export const UpdateTuitThunk = createAsyncThunk('tuits/UpdateTuit',  async (tuit) =>{
    console.log("called the service")
    const updatetuit = await service.UpdateTuit(tuit);
    return updatetuit
})