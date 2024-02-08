import { jwtDecode as decode } from "jwt-decode";

class AuthService {
  getToken() {
    return localStorage.getItem("id_token");
  }

  login(idToken) {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("id_token");
    // window.location.assign("/login");
  }

  getUserInfo() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    if (!token || this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem("id_token");
      return true;
    }

    return false;
  }
}

export default new AuthService();
