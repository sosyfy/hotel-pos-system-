
class AuthService {
    getCurrentUserName() {
        return localStorage.getItem("user");
    }

    getCurrentUserType() {
        return localStorage.getItem("type");
    }

    getUserLoggedInAt() {
        return localStorage.getItem("expiry");
    }

    getCurrentUserAccessToken() {
        return localStorage.getItem("token");
    }

    getClientId() {
        return localStorage.getItem("clientId")
    }

}

export default new AuthService();