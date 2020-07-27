import { SET_NUMBER_OF_AVIARIES} from './types'

export function rootReducer(state, action) {
    switch (action.type) {
        case SET_NUMBER_OF_AVIARIES:
            return action.id

        default:
            return state
    }
}
