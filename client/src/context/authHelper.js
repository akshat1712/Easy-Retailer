import axios from "axios"

const BASE_URL = '/retailer/'

const login = async (data) => {
    const response = await axios.post(BASE_URL + 'login', data);
    if (response.data) localStorage.setItem('ERuser', JSON.stringify(response.data));
    return response.data;
}

const logout = async (data) => {
    localStorage.removeItem('ERuser');
}

const register = async (data) => {
    const response = await axios.post(BASE_URL + 'register', data);
    if (response.data) localStorage.setItem('ERuser', JSON.stringify(response.data));
    return response.data;
}

const authHelper = { login, logout, register };

export default authHelper;