import React from "react";
import {Link} from "react-router-dom";
import "./Header.scss"
import user from "../../images/user.png"

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">MOVIE LOGO</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" className="user" />
      </div>
    </div>
  );
};

export default Header;
