
class RoleCheckerService{

    hasSystemAdminRole() {
        return localStorage.getItem("roles").includes('System Admin');
    }

}

export default new RoleCheckerService();