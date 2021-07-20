import React from "react";

import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="feedback-board">
        <div className="mentor">
          <h4>Frontend Mentor</h4>
          <span>Feedback Board</span>
        </div>
        {/** */}
        <div className="issue">
          <span className="all active">All</span>
          <span className="ui">UI</span>
          <span className="ux">UX</span>
          <span className="enhance">Enhancement</span>
          <span className="bug">Bug</span>
          <br />
          <span>Feature</span>
        </div>
        <div className="roadmap">
          <div className="path">
            <span>Roadmap</span>
            <a href ="/view"><span>View</span></a>
          </div>
          <div className="table">
            <table width="100%">
              <tbody>
                <tr>
                  <td>
                    <div>
                      <span className="indicator-1"></span>
                    </div>
                  </td>
                  <td>
                    <div>Planned</div>
                  </td>
                  <td>
                    <div>2</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <span className="indicator-2"></span>
                    </div>
                  </td>
                  <td>
                    <div>In-Progress</div>
                  </td>
                  <td>
                    <div>3</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <span className="indicator-3"></span>
                    </div>
                  </td>
                  <td>
                    <div>Live</div>
                  </td>
                  <td>
                    <div>1</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/** */}
      </div>
    </div>
  );
};

export default Sidebar;
