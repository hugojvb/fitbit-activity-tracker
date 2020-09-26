import React from "react";
import "../style/start.css";

const Start = (props) => {
  return (
    <div>
      <section className="start">
        <article>
          <legend>Welcome!</legend>
          <h6 className="start__exp">
            This is an app that helps you track your activity with Fitbit!
          </h6>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="btn"
            href="https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=22BRPY&redirect_uri=https%3A%2F%2Fpeaceful-darwin-1a89b0.netlify.app%2Fgrid&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight&expires_in=604800"
          >
            <p>Let's Start</p>
          </a>
        </article>
      </section>
    </div>
  );
};

export default Start;
