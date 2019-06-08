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
        <form action="" onChange={props.searchBar} onSubmit={props.searchBar}>
          <input type="search" placeholder="Search" />
        </form>
      </div>
      <div>
        <i className="fas fa-compass" />
        <i className="fas fa-heart" />
        <i className={"fas fa-user"} >
        <div className={classes.Logout}>
          <br/>
          <small>Hi {props.username}</small>
          <button onClick={props.logout}>Logout</button>
        </div>
        </i>
        
        
        
      </div>
    </div>
  );
};

searchBar.propTypes = {};

export default searchBar;
