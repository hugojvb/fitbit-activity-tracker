import React, { Component } from "react";
import "../style/signin.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ email: "" });
  };

  render() {
    return (
      <div className="login-container">
        <form className="form-control">
          <article>
            <legend>Sign in</legend>
            <div className="email">
              <label htmlFor="email" value="email">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                placeholder="Your email..."
                onChange={this.onChange}
                required
              />
            </div>
            <div className="password">
              <label htmlFor="password" value="password">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Your password..."
                onChange={this.onChange}
                required
              />
            </div>
            <input
              type="submit"
              className="btn"
              onClick={this.onSubmit}
              value="Sign in"
            />
          </article>
        </form>
      </div>
    );
  }
}

export default Login;
