import { csrfFetch } from './csrf'

const LOAD = 'events/LOAD';
const ADD_ONE = 'events/ADD_ONE';


const load = events => ({
    type: LOAD,
    events,
  });


export const getEvents = () => async dispatch => {
    const response = await csrfFetch('/api/search');
    if (!response.ok) {
        throw response
    }
    const events = await response.json();
    dispatch(load(events));
};



const addOneEvent = event => ({
    type: ADD_ONE,
    event,
  });
  
export const createEvent = data => async dispatch => {
console.log('HERES MY DATA!!!',data);
const response = await csrfFetch('/api/search', {
    method: 'post',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
});

if (response.ok) {
    console.log("Response is OK!!!!")
    const event = await response.json();
    dispatch(addOneEvent(event));
    return event;
}
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
    case ADD_ONE: {
          const newState = {
            ...state,
            [action.event.id]: action.event
          };
          return newState;
        }
      
    default:
    return state;
}
}

export default eventsReducer;
