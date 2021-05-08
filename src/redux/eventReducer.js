const CREATE_EVENT = 'CREATE_EVENT'
const UPDATE_EVENT = 'UPDATE_EVENT'
const DELETE_EVENT = 'DELETE_EVENT'
const FETCH_EVENTS = 'FETCH_EVENTS'

const initialState = {
    events: []
}

export default function eventReducer(state = initialState, {type, payload}) {
    switch (type) {
        case CREATE_EVENT:
            return {
                ...state,
                events: [...state.events, payload]
            }
        case UPDATE_EVENT:
            return {
                ...state,
                events: [...state.events.filter(e => e.id !== payload.id), payload]
            }
        case DELETE_EVENT:
            return {
                ...state, 
                events: [...state.events.filter(e => e.id !== payload)]
            }
        case FETCH_EVENTS:
            return {
                ...state, 
                events: [...payload] //payload because it is anywhere an array
            }    
        default: 
            return state
    }
}

