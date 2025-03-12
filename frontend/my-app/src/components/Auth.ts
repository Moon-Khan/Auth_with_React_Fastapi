import axios from "axios";

const API_URL = "http://localhost:8000"

export const login_auth = async (username: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { username, password })
    console.log(response)
    return response.data;

}
export const register_auth = async (username: string, password: string) => {
    const response= await axios.post(`${API_URL}/register`, { username, password });
    return response.data;
};

    
