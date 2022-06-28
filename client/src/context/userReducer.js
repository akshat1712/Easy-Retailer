export const userReducer = (state, action) => {
    switch (action.type) {
        case 'RESET': {
            return ({
                isLoading: false,
                isSuccess: false,
                isError: false,
                message: '',
            })
        }
        case 'LOGIN/PENDING': {
            return ({
                ...state,
                isLoading: true,
            })
        }
        case 'LOGIN/SUCCESS': {
            return ({
                ...state,
                user: action.payload,
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: '',

            })
        }
        case 'LOGIN/ERROR': {
            return ({
                ...state,
                isLoading: false,
                isError: true,
                message: action.payload,

            })
        }
        case 'REGISTER/PENDING': {
            return ({
                ...state,
                isLoading: true,
            })
        }
        case 'REGISTER/SUCCESS': {
            return ({
                ...state,
                user: action.payload,
                isLoading: false,
                isSuccess: true,
                isError: false,
                message: '',

            })
        }
        case 'REGISTER/ERROR': {
            return ({
                ...state,
                isLoading: false,
                isError: true,
                message: action.payload,

            })
        }
        case 'LOGOUT': {
            return ({
                ...state,
                user: null,
                isLoading: false,
                isSuccess: false,
                isError: false,
                message:'',

            })
        }
        default: {
            return state;
        }
    }
}