
class AuthService {
    getCurrentUserName() {
        return localStorage.getItem("user");
    }

    getCurrentUserType() {
        return localStorage.getItem("Type");
    }

    getUserLoggedInAt() {
        return localStorage.getItem("expiry");
    }
    
    getCurrentUserAccessToken() {
        return localStorage.getItem("token");
    }
    getAppKey() {
        return localStorage.getItem("appKey")
    }
    
    getClientId() {
        return localStorage.getItem("clientId")
    }

    getCurrentUserAccessToken() {
        return localStorage.getItem("token");
    }
   

    getCurrentUserRoles() {

        return localStorage.getItem("roles");

    }
    
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

export default new AuthService();