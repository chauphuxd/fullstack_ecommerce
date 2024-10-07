
import { Link } from 'react-router-dom';

const menuRocker = () => {
  return (
    <div className="nav-container primary-menu">
      <div className="mobile-topbar-header">
        <div>
          <img src="../../assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
        </div>
        <div>
          <h4 className="logo-text">Rukada</h4>
        </div>
        <div className="toggle-icon ms-auto">
          <i className='bx bx-arrow-to-left'></i>
        </div>
      </div>
      <nav className="navbar navbar-expand-xl w-100">
        <ul className="navbar-nav justify-content-start flex-grow-1 gap-1">
          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle dropdown-toggle-nocaret"
              data-bs-toggle="dropdown"
            >
              <div className="parent-icon">
                <i className='bx bx-home-circle'></i>
              </div>
              <div className="menu-title text-nowrap">Dashboard</div>
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/index">
                  <i className="bx bx-right-arrow-alt"></i>Default
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/index2">
                  <i className="bx bx-right-arrow-alt"></i>Alternate
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/index3">
                  <i className="bx bx-right-arrow-alt"></i>Graphical
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/loai-phong">
              <div className="parent-icon">
                <i className="fa-solid fa-chess-rook"></i>
              </div>
              <div className="menu-title text-nowrap">Loại Phòng</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/admin/dich-vu">
              <div className="parent-icon">
                <i className="fa-brands fa-servicestack"></i>
              </div>
              <div className="menu-title text-nowrap">Dịch Vụ</div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default menuRocker;
