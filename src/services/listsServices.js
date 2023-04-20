import Axios from "./Axios";

let ListsServices = {
    allList: async function () {
        const response = await Axios.get(`v1/lists`);
        return response;
    },

    createList: async function (obj) {
        const response = await Axios.post(`v1/lists`, obj);
        return response;
    },

    editList: async function (listId, obj) {
        const response = await Axios.put(`v1/lists/${listId}`, obj);
        return response;
    },

    deleteList: async function (listId) {
        const response = await Axios.delete(`v1/lists/${listId}`);
        return response;
    },
};

export default ListsServices;