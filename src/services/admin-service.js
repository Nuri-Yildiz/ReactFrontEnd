import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/";

class AdminService {

    getUsers(){
        return axios.get(API_URL + 'users');
    }
    getRoles(){
        return axios.get(API_URL + 'roles');
    }
    postUpdatedUser(){
        return axios.post(API_URL + 'updateRole');
    }
}
export default new AdminService();
