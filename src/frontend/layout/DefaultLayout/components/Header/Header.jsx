import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
        <div className="container">
          <a className="navbar-brand" href="#">
                    Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >

            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent1"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  <i className="bx bx-home-alt me-1"></i>Home
                </a>
              </li>
              <li className="nav-item">

                <a className="nav-link" href="#">
                  <i className="bx bx-user me-1"></i>About
                </a>
              </li>
              <li className="nav-item">

                <a className="nav-link" href="#">
                  <i className="bx bx-category-alt me-1"></i>
                                Features
                </a>
              </li>
              <li className="nav-item">

                <a className="nav-link" href="#">
                  <i className="bx bx-microphone me-1"></i>Contact
                </a>
              </li>
              <li className="nav-item dropdown">

                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                                Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                                        Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                                        Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                                        Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex nav-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Some"
                />
                <button className="btn" type="submit">
                  <i className="bx bx-search"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
