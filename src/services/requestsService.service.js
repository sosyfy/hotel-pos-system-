import { axiosInstance, baseUrl } from "./API";

class RequestsService {
        
    login(data){
        return axiosInstance.post(baseUrl + "/auth", data);
    }
    recoverPassword(data) {
        return axiosInstance.post(baseUrl + "/accounts/forgotpassword", data);
    }
    resetPassword(data) {
        return axiosInstance.post(baseUrl + "/accounts/resetpassword", data)
    }

    
  
}

export default new RequestsService();
