// components
import Login from '../pages/auth/Login'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import SingUp from '../pages/SingUp'

export const routeNames = {
    HOME: '/',
    LOGIN: '/login',
    PROFILE: '/profile',
    SINGUP: '/singup',
}

export const publicRoutes = [
    {
        id: 2011,
        component: Home,
        path: routeNames.HOME,
    },
    {
        id: 2012,
        component: Login,
        path: routeNames.LOGIN,
    },
    {
        id: 2013,
        component: SingUp,
        path: routeNames.SINGUP,
    },
]

export const privateRoutes = [
    {
        id: 2,
        component: Profile,
        path: routeNames.PROFILE,
    },
]
