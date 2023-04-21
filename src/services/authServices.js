import Axios from "./Axios";

let authServices = {
    login: async function (obj) {
        const response = await Axios.post(`users/login`, obj);
        return response;
    },

    register: async function (obj) {
        const response = await Axios.post(`users/register`, obj);
        return response;
    },
};

export default authServices;