const Header = () => {
  return (
    <div>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
    </div>
  );
};
export default Header;
