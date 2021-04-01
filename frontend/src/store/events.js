const LOAD = 'events/LOAD';

const load = events => ({
    type: LOAD,
    events,
  });


export const getEvents = () => async dispatch => {
    const response = await fetch('/api/search');
    if (!response.ok) {
        throw response
    }
    const events = await response.json();
    dispatch(load(events));
};


const initialState = {
    events: [],
  };


const eventsReducer = (state = initialState, action) => {
switch (action.type) {
    case LOAD: {
    const allEvents = {};
    action.events.forEach(event => {
        allEvents[event.id] = event;
    });
    return {
        ...allEvents,
        ...state,
        events: action.events
    };
    }
    default:
    return state;
}
}

export default eventsReducer;
