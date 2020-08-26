import React, { Component } from "react";
import "../style/auth.css";

export default class Auth extends Component {
  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Sign in</legend>
            <div>
              <label htmlfor="name" value="name">
                Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Please enter your name"
              />
            </div>
            <div>
              <label htmlfor="email" value="email">
                E-mail:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Please enter your email"
              />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
