import config from '../config'
import DefaultLayout from '../../admin/layout/wrapper/DefaultAdmin/DefaultLayout'
import Home from '../pages/Home'

const adminRoutes = [
  {
    path: config.routes.home,
    component: Home,
    layout: DefaultLayout
  }
]

export { adminRoutes }