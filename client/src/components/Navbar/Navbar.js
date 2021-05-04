import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/");
    setUser(null);
  };

  return (
    <div>
      {/******** Navigation Bar **********/}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark myBorderBot justify-content-between">
        <a className="navbar-brand" href="/">
          TB
        </a>
        <div>
          {user ? (
            <>
              <span className="text-white p-2">Hello, {user.result?.name}</span>
              <button
                type="button"
                className="btn btn-outline-warning"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth">
              <button type="button" className="btn btn-primary">
                Sign in
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
