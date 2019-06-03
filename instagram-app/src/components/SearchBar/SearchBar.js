import React from "react";
// import PropTypes from "prop-types";
import classes from './SearchBar.module.scss'

const searchBar = props => {
  return (
    <div className={classes.Searchbar}>
      <div>
        <i className="fab fa-instagram " />
        <p className={classes.Logo}>Instagram</p>
      </div>
      <div>
        {" "}
        <form action="">
          <input type="text" placeholder="Search" />
        </form>
      </div>
      <div>
        <i className="fas fa-compass" />
        <i className="fas fa-heart" />
        <i className="fas fa-user" />
      </div>
    </div>
  );
};

searchBar.propTypes = {};

export default searchBar;
