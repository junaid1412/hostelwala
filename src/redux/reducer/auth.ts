import { AddProfile } from "../../screens/updateProfile/AddProfile"
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, Logout, EmailOtp_REQUEST, EmailOtp_SUCCESS, EmailOtp_FAIL } from "../actions"
const init = {
    authanticated: false,
    Addprofile: false,
    addRoom: false,
    addQualification: false,
    loginLoding: false,
    signupData: {},
    authData: {},
    validation: {},
    registerLogin: false,
    emailOtp: "",
    emailverifErro: "",
    addprofile: false,
    addqualification: false,
    addroom: false,
    emailVerify: {
        email: "",
        password: "",
        name: "",
        mobile: ""
    },
}

export function auth(state: any = { ...init }, action: any) {
    switch (action.type) {
        case LOGIN_REQUEST:
            // return { ...state, loginLoding: true }
            console.log(action)
            return { ...state, loginLoding: true, }
        case LOGIN_SUCCESS:
            return { ...state, authanticated: true, loginLoding: false, addprofile: true, addqualification: true, addroom: true }
        // console.log(action)
        // return { ...state, authanticated: true, loginLoding: false, authData: { ...user_data, profile_image, check_profile } }
        case LOGIN_FAIL:
            return { ...state, authanticated: false, loginLoding: false }
        case "REGISTER_REQUEST":
            // return { ...state, loginLoding: true }
            return { ...state, authanticated: true, loginLoding: false, }
        // const { user_data, profile_image, check_profile } = action.payload
        case Logout:
            return { ...state, ...init }
        case EmailOtp_REQUEST:
            console.log("EmailOtp_REQUEST")
            return { ...state, emailOtp: "", registerLogin: true, emailverifErro: "" }
        case EmailOtp_SUCCESS:
            return { ...state, emailOtp: action.payload.OTP, registerLogin: false }
        case EmailOtp_FAIL:
            console.log({ action })
            return { ...state, registerLogin: false, emailverifErro: action.payload }
        case "AddProfile":
            return { ...state, addprofile: true }
        case "Addqualification":
            return { ...state, addqualification: true }
        case "Addroom":
            return { ...state, addroom: true }
        default:
            return { ...state }
    }
}