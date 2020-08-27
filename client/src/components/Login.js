import React, { Component } from "react";
import "../style/login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
  }

  onChange = (key, value) => {
    this.setState({
      [key]: value,
      [key]: value,
    });
  };

  render() {
    return (
      <div className="login-container">
        <form className="form-control">
          <article>
            <legend>Sign in</legend>
            <div className="email">
              <label htmlfor="email" value="email">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                placeholder="Please enter your email"
                onChange={(e) => this.onChange("email", e.target.value)}
              />
            </div>
            <div className="password">
              <label htmlfor="password" value="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Please enter your password"
                onChange={(e) => this.onChange("password", e.target.value)}
              />
            </div>
            <input
              type="submit"
              className="btn"
              onClick={(e) => this.onClick}
              value="Login"
            />
          </article>
        </form>
      </div>
    );
  }
}

export default Login;
