import { fetchSampleData } from "../api/mockApi"
import { asyncActionError, asyncActionFinish, asyncActionStart } from "./asyncReducer"

const CREATE_EVENT = 'CREATE_EVENT'
const UPDATE_EVENT = 'UPDATE_EVENT'
const DELETE_EVENT = 'DELETE_EVENT'
const FETCH_EVENTS = 'FETCH_EVENTS'

export function loadEvents(){
    return async function(dispatch) {
        dispatch(asyncActionStart())
        try {
            const events = await fetchSampleData()
            dispatch({type: FETCH_EVENTS, payload: events})
            dispatch(asyncActionFinish())
        } catch (error) {
            dispatch(asyncActionError(error))
        }
    }
}

export function createEvent(event) {
    return {
        type: CREATE_EVENT,
        payload: event
    }
}

export function updateEvent(event) {
    return {
        type: UPDATE_EVENT,
        payload: event
    }
}

export function deleteEvent(eventId) {
    return {
        type: DELETE_EVENT,
        payload: eventId
    }
}