import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-left">
          <div className="award">
            <span className="las la-award"></span>
            <span className="suggest">6 Suggestions</span>
          </div>
          <div className="sort">
            <span>Sort By</span>
            <span className="vote">Most Upvotes</span>
            <span className="las la-angle-down"></span>
          </div>
        </div>
        <div className="header-right">
        <button className="btn-feed"><span className="las la-plus"></span>Add Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
