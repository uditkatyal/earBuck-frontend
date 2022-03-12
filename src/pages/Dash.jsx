import React, { components } from "react";
import Profile from "./Profile";

class Dash extends React.Component {
  render() {
    return (
      <div>
        <div className="container py-4">
          <nav
            className="
		navbar navbar-expand-lg navbar-light
		bg-white
		border-bottom
		pb-3
		mb-4
		sticky-top
		"
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                Blue<span className="text-primary">Tracker</span>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/profile">
                      Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/activity">
                      Activity
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/leaderboard">
                      Leaderboard
                    </a>
                  </li>
                </ul>
                <div className="ms-auto">
                  <button
                    className="btn btn-outline-primary"
                    type="submit"
                    onclick="logout();"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* <!-- Nav end --> */}

          <h1>
            {" "}
            <span className="text-primary">Welcome back</span>
            <span className="user-name"></span>
          </h1>
          <p className="text-secondary">
            This is your dashboard. It gives you an overview of everything.
          </p>
          <div className="row align-items-md-stretch" id="explore">
            <div className="col-md-4 pt-3">
              <div className="h-100 p-3 rounded-3" id="budget-status">
                <h3>Monthly Budget Status</h3>
                <hr />
                <h5 className="text-center">
                  <span id="month-progress"></span>
                  <span className="user-name"></span>
                </h5>
                <p className="text-center pt-3">
                  <table>
                    <tr>
                      <td>Total Income</td>
                      <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                      <td id="income"></td>
                    </tr>
                    <tr>
                      <td>This Month's Goal</td>
                      <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                      <td id="goal"></td>
                    </tr>
                    <tr>
                      <td>Total Savings</td>
                      <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                      <td id="savings"></td>
                    </tr>
                    <tr>
                      <td>Goal Achieved</td>
                      <td>&nbsp;&nbsp;:&nbsp;&nbsp;</td>
                      <td id="achieved"></td>
                    </tr>
                  </table>
                </p>
                <div className="pt-3 pb-4 text-center">
                  <a href="/profile">
                    <button className="btn btn-outline-dark" type="button">
                      Adjust Budget
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4 pt-3">
              <div className="h-100 p-3 bg-light border rounded-3">
                <h4>Transactions</h4>
                <div>
                  <hr />
                  <div className="col-md-10 offset-md-1 my-2">
                    <div className="card">
                      <div className="card-body"></div>
                      <div className="card-body">
                        <canvas id="myChart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 pt-3">
              <div className="h-100 p-3 text-dark bg-light rounded-3">
                <h2>Expenditure Status</h2>
                <hr />
                <p>Spendings</p>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped active"
                    id="budget-spendings"
                    role="progressbar"
                    style={{ width: 0 }}
                  ></div>
                </div>
                <p className="pt-3">Savings</p>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped active"
                    id="budget-savings"
                    role="progressbar"
                    style={{ width: 0 }}
                  ></div>
                </div>

                <div className="p-4 text-center">
                  <a href="/activity">
                    <button
                      className="btn btn-success text-light btn-outline-success mx-2"
                      type="button"
                    >
                      Detailed Expenditure Activity
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <h3 className="pt-5">Current Year Activity</h3>
          <div>
            <hr />
            <div className="col-md-10 offset-md-1 my-2">
              <div className="card">
                <div className="card-body"></div>
                <div className="card-body">
                  <canvas id="my_Chart"></canvas>
                </div>
              </div>
            </div>
            <hr />
          </div>
          <footer className="pt-3 mt-4 text-muted border-top">
            <center>
              Made with ❤️ by team BlueBots
              <br />
              <a
                href="https://github.com/vaibhavkumar5/Blue-Tracker"
                target="_blank"
              >
                Source Code at GitHub
              </a>
            </center>
          </footer>
        </div>
      </div>
    );
  }
}
export default Dash;
