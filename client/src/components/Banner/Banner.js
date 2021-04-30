import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../img/tomatoes.jpeg";

const Banner = () => {
  return (
    <>
      <div className="container bg-dark rounded my-5 myBorder">
        <div className="row align-items-center">
          <div className="col text-white text-center">
            <h2 className="display-4">NutriBuild</h2>
            <div className="container">
              <Link to="/create">
                <button type="button" className="btn btn-primary m-2">
                  Create Recipe
                </button>
              </Link>
            </div>
          </div>
          <div className="col p-0">
            <img
              className="w-100"
              src={bannerImg}
              alt="bannerImg"
              style={{ minWidth: "250px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
