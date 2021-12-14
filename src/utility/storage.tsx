import { TOKEN_KEY } from "../config/constants"

interface IUserStorageDetails {
    auth_token: string
    email: string
    name: string
}

export const setUserDetails = (string: string) => {
    localStorage.setItem(TOKEN_KEY, string)
}

export const getUserDetails = () => {
    return JSON.parse(localStorage.getItem(TOKEN_KEY) || '{}') as IUserStorageDetails
}

export const getUserToken = () => {
    return getUserDetails().auth_token
}

export const getLoggedInUserEmail = () => {
    return getUserDetails().email
}

export const getLoggedInUserName = () => {
    return getUserDetails().name
}

export const clearStorage = () => {
    localStorage.clear()
    sessionStorage.clear()
}