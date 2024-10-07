import './DefaultLayout.css'
import { Route, Routes } from 'react-router-dom'
import '../../../assets/js/jquery.min.js'
import '../../../assets/plugins/simplebar/js/simplebar.min.js'
import '../../../assets/plugins/metismenu/js/metisMenu.min.js'
import '../../../assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js'
import '../../../assets/js/index.js'
import '../../../assets/js/app.js'
import Header from '../topRocker.jsx'
import Footer from '../botRocker.jsx'
import Menu from '../menuRocker.jsx'
const DefaultLayout = () => {
  return (
    <div className="wrapper">
      <div className="header-wrapper">
        <Header />
        <Menu />
      </div>
      <div className="page-wrapper">
        <div className="page-content">
          <Routes>
            <Route path="/admin/*" element={<div>Home Page</div>} />
            {/* Thêm các route khác nếu cần */}
          </Routes>
        </div>
      </div>
      <div className="overlay toggle-icon"></div>
      {/* Thay thế thẻ <a> bằng <button> hoặc <div> với sự kiện onClick */}
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="bx bxs-up-arrow-alt"></i>
      </button>
      <Footer />
    </div>
  )
}


export default DefaultLayout