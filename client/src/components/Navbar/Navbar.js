import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    console.log("called");
    setUser(JSON.parse(localStorage.getItem("profile")));
    console.log(user);
  }, [location]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/");
    setUser(null);
  };

  return (
    <div>
      {/******** Navigation Bar **********/}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark myBorderBot">
        <a className="navbar-brand" href="/">
          NB
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item">Action</a>
                <a className="dropdown-item">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search Recipe"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 mr-5"
              type="submit"
            >
              Search
            </button>
          </form>
          <div>
            {user ? (
              <>
                <span className="text-white p-2">
                  Hello, {user.result?.name}
                </span>
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
                <button type="button" className="btn btn-outline-primary">
                  Sign in
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
