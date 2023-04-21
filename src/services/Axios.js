import axios from "axios";
import endPoint from "./endPoint";

const baseURL = endPoint.endPoint;
const Axios = axios.create({ baseURL });

Axios.defaults.baseURL = baseURL;

Axios.interceptors.request.use(async (req) => {
    if (req.url === "users/login") {
        return req;
    } else if (req.url === "users/register") {
        return req;
    }

    let auth_access = localStorage.getItem("access");
});

export default Axios;