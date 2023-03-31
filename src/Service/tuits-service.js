import axios from 'axios';
/*
let Tuits_API = "http://localhost:4003/api/tuits"
*/

/*
const Tuits_API = 'https://tuiter-node-server-app-cs1234-sp23.onrender.com/api/tuits';
*/

const API_BASE = process.env.REACT_APP_API_BASE;
const Tuits_API = `${API_BASE}/tuits`;

export const FindTuit = async() =>{

    const response = await axios.get(Tuits_API);
    const tuits = response.data;
    return tuits;
}

export const CreateTuit = async (tuit) =>{

    const response  = await axios.post(Tuits_API, tuit)
    const newtuit = response.data;
    console.log("Thunk"+newtuit)
    return tuit
}

export const DeleteTuit = async (tid) =>{

    const response = await axios.delete(`${Tuits_API}/${tid}`);
    const tuits = response.data
    return tuits;
}


export const UpdateTuit = async (tuit) =>{

    const response  = await axios.put(`${Tuits_API}/${tuit._id}`, tuit);
    console.log("called the server"+ response.data);
    return tuit
}


