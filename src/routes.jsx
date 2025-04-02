import { DashBoardPage } from "./pages/dashboard"
import { Auth } from "./pages/auth"
const routes = [
    {path: '/auth', element: <Auth/>},
    {path: '/*', element: <DashBoardPage/>}
]

export default routes