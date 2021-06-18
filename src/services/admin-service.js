import axios from "axios";

const API_URL = "http://localhost:8080/api/admin/";

class AdminService {

    getUsers(){
        return axios.get(API_URL + 'users');
    }
    getRoles(){
        return axios.get(API_URL + 'roles');
    }
    updateUser(user) {
        return axios.post(API_URL + 'updatedUser', {user});
      }
}
export default new AdminService();
