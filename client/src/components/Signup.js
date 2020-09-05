import React, { Component } from "react";
import "../style/signup.css";

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
    // e.preventDefault();
  };

  render() {
    return (
      <div>
        <section className="start">
          <article>
            <legend>Welcome!</legend>
            <h6 className="start__exp">
              This is an app that helps you track your activity with Fitbit!
            </h6>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              href="https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22BRPY&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fgrid&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800"
            >
              <h7>Let's Start</h7>
            </a>
          </article>
        </section>
      </div>
    );
  }
}

export default Login;
