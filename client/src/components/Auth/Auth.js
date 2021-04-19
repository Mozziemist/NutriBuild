import React from "react";
import AuthStyle from "./AuthStyle.css";

const Auth = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div class="signup-form bg-dark mt-5 rounded text-light">
        <div className="m-3">
          <form action="/examples/actions/confirmation.php" method="post">
            <h2>Register</h2>
            <p class="hint-text">
              Create your account. It's free and only takes a minute.
            </p>
            <div class="form-group row p-3">
              <div class="col-xs-6 pr-2 pb-2">
                <input
                  type="text"
                  class="form-control"
                  name="first_name"
                  placeholder="First Name"
                  required="required"
                />
              </div>
              <div class="col-xs-6">
                <input
                  type="text"
                  class="form-control"
                  name="last_name"
                  placeholder="Last Name"
                  required="required"
                />
              </div>
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                name="email"
                placeholder="Email"
                required="required"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                name="confirm_password"
                placeholder="Confirm Password"
                required="required"
              />
            </div>
            <div class="form-group">
              <label class="checkbox-inline">
                <input type="checkbox" required="required" /> I accept the{" "}
                <a href="#">Terms of Use</a> &amp;{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>
            <div class="form-group">
              <button
                type="submit"
                class="btn btn-success btn-lg btn-block w-50 m-auto"
              >
                Register Now
              </button>
            </div>
          </form>
          <div class="text-center">
            Already have an account? <a href="#">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
