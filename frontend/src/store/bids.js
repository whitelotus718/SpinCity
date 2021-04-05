import { csrfFetch } from './csrf'

const LOAD = 'bids/LOAD';

const load = bids => ({
    type: LOAD,
    bids,
  });

  export const getBids = () => async dispatch => {
    const response = await csrfFetch('/api/bids');
    if (!response.ok) {
        throw response
    }
    const bids = await response.json();
    dispatch(load(bids));
};

const initialState = {
    bids: [],
  };

const bidsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD: {
        const allBids = {};
        action.bids.forEach(bid => {
            allBids[bid.id] = bid;
        });
        return {
            ...allBids,
            ...state,
            bids: action.bids
        };
        }
        // case ADD_ONE: {
        //       const newState = {
        //         ...state,
        //         [action.event.id]: action.event
        //       };
        //       return newState;
        //     }
        default:
        return state;
    }
    }

    export default bidsReducer;
