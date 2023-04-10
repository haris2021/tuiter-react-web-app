import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const Users_API = `${API_BASE}/api/users`;


const api = axios.create({
                             withCredentials: true,
                         });

export const findAllUsers = async () => {
    const response = await api.get(Users_API);
    const users = response.data;
    console.log(users);
    return users;
};


