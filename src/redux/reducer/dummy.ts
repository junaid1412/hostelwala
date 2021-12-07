import { Dummy } from "../actions/action"
const init = {
    text: ""
}

export function dummy(state = { ...init }, action: any) {
    switch (action.type) {
        case Dummy:
            return { text: action.payload }
        default:
            return { ...state }
    }
}