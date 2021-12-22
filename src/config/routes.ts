import lazy from "../utility/lazy"

const Login = lazy(() => import('../modules'), 'Login')
const Signup = lazy(() => import('../modules'), 'Signup')
const Home = lazy(() => import('../modules'), 'Home')

export interface IRouteConfig {
    authenticated: boolean
    bLabel: string
    children: IRouteConfig[] | undefined
    component: any
    config: Object
    exact: boolean
    key: string
    label: string
    layout: string[]
    link: string
    path: string
    subType: string
    pageId: string
}

export const RoutesPath = {
    HOME: '/',
    LOGIN: '/login',
    LOGOUT: '/logout',
    SIGNUP: '/signup',
    FORGOT_PASSWORD: '/forgot-password',
    PROFILE: '/profile'
}
  

export const routes = []

export const shareRoutes: IRouteConfig[] = [{
    authenticated: false,
    bLabel: '',
    children: undefined,
    exact: true,
    config: {},
    component: Home,
    key: 'home',
    label: '',
    layout: ['shareHeader'],
    link: RoutesPath.HOME,
    path: RoutesPath.HOME,
    subType: '',
    pageId: ''
},{
    authenticated: false,
    bLabel: '',
    children: undefined,
    exact: true,
    config: {},
    component: Login,
    key: 'login',
    label: '',
    layout: ['shareHeader'],
    link: RoutesPath.LOGIN,
    path: RoutesPath.LOGIN,
    subType: '',
    pageId: ''
},{
    authenticated: false,
    bLabel: '',
    children: undefined,
    exact: true,
    config: {},
    component: Signup,
    key: 'signup',
    label: '',
    layout: ['shareHeader'],
    link: RoutesPath.SIGNUP,
    path: RoutesPath.SIGNUP,
    subType: '',
    pageId: ''
},{
    authenticated: false,
    bLabel: '',
    children: undefined,
    exact: true,
    config: {},
    component: Login,
    key: 'logout',
    label: '',
    layout: ['shareHeader'],
    link: RoutesPath.LOGOUT,
    path: RoutesPath.LOGOUT,
    subType: '',
    pageId: ''
},{
    authenticated: false,
    bLabel: '',
    children: undefined,
    exact: true,
    config: {},
    component: Login,
    key: 'forgotPassword',
    label: '',
    layout: ['shareHeader'],
    link: RoutesPath.FORGOT_PASSWORD,
    path: RoutesPath.FORGOT_PASSWORD,
    subType: '',
    pageId: ''
}]