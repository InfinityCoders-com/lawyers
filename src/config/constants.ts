export const TOKEN_KEY = 'lawyer_tok'

export const API_URLS = {
    baseURL: 'https://vakeel-app.herokuapp.com',
    Lawyers: {
        list: '/api/v1/users'
    },
    Auth: {
        signin: '/api/v1/authenticate',
        signup: '/api/v1/users'
    }
}

export const initialFilters = {
    "experience": {
        filterKey: "experience",
        filterLabel: 'Experience',
        options: {
            100: {
                label: '25+ Years',
                value: 100,
                count: 0,
                selected: false
            },
            25: {
                label: '21 - 25 Years',
                value: 25,
                count: 0,
                selected: false
            },
            20: {
                label: '16 - 20 Years',
                value: 20,
                count: 0,
                selected: false
            },
            15: {
                label: '11 - 15 Years',
                value: 15,
                count: 0,
                selected: false
            },
            10: {
                label: '6 - 10 Years',
                value: 10,
                count: 0,
                selected: false
            },
            5: {
                label: '0 - 5 Years',
                value: 5,
                count: 0,
                selected: false
            }
        }
    },
    "education": {
        filterKey: "education",
        filterLabel: 'Education',
        options: {}
    }
}
