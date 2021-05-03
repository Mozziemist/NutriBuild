import React, { useState } from "react";
import "./AuthStyle.css";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signin, signup } from "../../actions/auth";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const switchMode = () => setIsSignup((previsSignup) => !previsSignup);

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    console.log(res);
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", payload: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google sign in was unsuccessful");
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="signup-form bg-dark mt-5 rounded text-light">
        <div className="m-3">
          <form onSubmit={handleSubmit}>
            <h2>{isSignup ? "Sign Up" : "Sign in"}</h2>
            {isSignup && (
              <p className="hint-text">
                Create your account. It's free and only takes a minute.
              </p>
            )}

            {isSignup && (
              <div className="form-group row p-3">
                <div className="col-xs-6 pr-2 pb-2">
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    onChange={handleChange}
                    placeholder="First Name"
                    required="required"
                  />
                </div>
                <div className="col-xs-6">
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    onChange={handleChange}
                    placeholder="Last Name"
                    required="required"
                  />
                </div>
              </div>
            )}

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleChange}
                placeholder="Email"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
                placeholder="Password"
                required="required"
              />
            </div>
            {isSignup && (
              <>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="confirm_password"
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    required="required"
                  />
                </div>
              </>
            )}

            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success btn-lg btn-block w-50 m-auto"
              >
                {isSignup ? "Register Now" : "Sign in"}
              </button>
              {!isSignup && (
                <GoogleLogin
                  clientId={process.env.REACT_APP_G_CLIENT_ID}
                  render={(renderProps) => (
                    <button
                      type="button"
                      className="btn btn-block btn-sm btn-primary w-50 mx-auto my-2"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-google mr-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                      </svg>
                      Google Sign in
                    </button>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"
                />
              )}
            </div>
          </form>
          {isSignup ? (
            <div className="text-center">
              Already have an account?{" "}
              <button className="btn text-primary" onClick={switchMode}>
                Sign in
              </button>
            </div>
          ) : (
            <div className="text-center">
              Don't have an account?{" "}
              <button className="btn text-primary" onClick={switchMode}>
                Register here
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
