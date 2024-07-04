class user {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
  changename() {
    return `${this.username.toUpperCase()}`;
  }
}

const userinfo = new user("ninad", 1234, "niand@123gmail.com");

// console.log(userinfo);

console.log(userinfo.changename());
