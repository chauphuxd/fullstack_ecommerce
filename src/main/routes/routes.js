import { frontendRoutes } from '../../frontend/routes/routes'
import { adminRoutes } from '../../admin/routes/routes'

const arrayRoutes = frontendRoutes.concat(adminRoutes)

export { arrayRoutes }