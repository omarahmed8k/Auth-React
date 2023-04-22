import axios from "axios";
import endPoint from "./endPoint";

const baseURL = endPoint.endPoint;
const Axios = axios.create({ baseURL });

Axios.defaults.baseURL = baseURL;

Axios.interceptors.request.use(async (req) => {
    req.headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        'Accept': "application/json",
        "Content-Type": "application/json",
    };

    if (req.url === "users/login") {
        return req;
    } else if (req.url === "users/register") {
        return req;
    }

    let auth_access = localStorage.getItem("access");
});

export default Axios;