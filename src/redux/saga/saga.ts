import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { ForgetPassword, Login, Register, SendOTP, TenantDetail } from "./apis"
import * as actions from "../actions"

function* login(action: any) {
    try {
        console.log("saga", action)
        const result = yield call(Login, action.payload)
        console.log("result", result)
        if (result.status !== 200) {
            throw result.message;
        }
        yield put({ type: actions.LOGIN_SUCCESS, payload: result });
    } catch (e) {
        yield put({ type: actions.LOGIN_FAIL, payload: e });
    }
}
function* ForgetPass(action: any) {
    try {
        const result = yield call(ForgetPassword, action.payload)
        if (result.status !== 200) {
            throw result.message;
        }
        yield put({ type: actions.FORGET_SUCCESS, payload: result });
    } catch (e) {
        yield put({ type: actions.FORGET_FAIL, payload: e });
    }
}
function* EmaiOtpSend(action: any) {
    try {
        const result = yield call(SendOTP, action.payload)
        console.log("EmaiOtpSend", result)
        if (result.status !== 200) {
            throw result.message;
        }
        yield put({ type: actions.EmailOtp_SUCCESS, payload: result });
    } catch (e) {
        yield put({ type: actions.EmailOtp_FAIL, payload: e });
    }
}

function* Signup(action: any) {
    try {
        const result = yield call(Register, action.payload)
        if (result.status !== 200) {
            throw result.message;
        }
        yield put({ type: actions.SIGNUP_SUCCESS, payload: result });
    } catch (e) {
        yield put({ type: actions.SIGNUP_FAIL, payload: e });
    }
}

const loginApi = takeEvery(actions.LOGIN_REQUEST, login)
const ForgetPassApi = takeEvery(actions.FORGET_REQUEST, ForgetPass)
const EmaiOtpSendApi = takeEvery(actions.EmailOtp_REQUEST, EmaiOtpSend)
const RegisterApi = takeEvery(actions.SIGNUP_REQUEST, Signup)

function* RootSaga() {
    yield all([loginApi, ForgetPassApi, EmaiOtpSendApi, RegisterApi])
}

export default RootSaga