import lazy from "../utility/lazy"

const Login = lazy(() => import('../modules'), 'Login')
const Signup = lazy(() => import('../modules'), 'Signup')
const Home = lazy(() => import('../modules'), 'Home')
const Profile = lazy(() => import('../modules'), 'Profile')
const Edit = lazy(() => import('../modules'), 'Edit')
const VakeelProfile = lazy(() => import('../modules'), 'VakeelProfile')

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
    PROFILE: '/profile',
    EDIT: '/edit',
    VAKEEL_PROFILE: '/vakeel-profile'
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
},{
    authenticated: false,
    bLabel: '',
    children: undefined,
    exact: true,
    config: {},
    component: Profile,
    key: 'profile',
    label: '',
    layout: ['shareHeader'],
    link: RoutesPath.PROFILE,
    path: RoutesPath.PROFILE,
    subType: '',
    pageId: ''
},{
    authenticated: false,
    bLabel: '',
    children: undefined,
    exact: true,
    config: {},
    component: Edit,
    key: 'edit',
    label: '',
    layout: ['shareHeader'],
    link: RoutesPath.EDIT,
    path: RoutesPath.EDIT,
    subType: '',
    pageId: ''
},{
    authenticated: false,
    bLabel: '',
    children: undefined,
    exact: true,
    config: {},
    component: VakeelProfile,
    key: 'vakeel-profile',
    label: '',
    layout: ['shareHeader'],
    link: RoutesPath.VAKEEL_PROFILE,
    path: RoutesPath.VAKEEL_PROFILE,
    subType: '',
    pageId: ''
}]