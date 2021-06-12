import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/";

class AdminService {

    getUsers(){
        return axios.get(API_URL + 'users');
        
    }}
export default new AdminService();
