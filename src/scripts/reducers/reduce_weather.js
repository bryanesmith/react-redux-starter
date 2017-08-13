import { FETCH_WEATHER } from '../actions';

const INITIAL_STATE = { years: [] };

/**
 * Reducer function for books application.
 */
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case FETCH_WEATHER:
    return { ...state, results: action.payload.query.results.channel };
  default:
    return INITIAL_STATE;
  }
}
