// This is a fake implementation for logging in and out without a real server.
export default class authHelperMethods {
  login = (email, password) => {
    this.setToken("my fake token");
  };

  loggedIn = () => {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  };

  isTokenExpired = token => {
    return false;
  };

  setToken = idToken => {
    localStorage.setItem("id_token", idToken);
  };

  getToken = () => {
    return localStorage.getItem("id_token");
  };

  logout = () => {
    localStorage.removeItem("id_token");
  };

  getConfirm = () => {
    return this.getToken();
  };
}
