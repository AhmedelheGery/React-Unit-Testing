import {SAVE_COMMENT} from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      // any time we see action with this type we add its payload to our state
      return [...state,action.payload] 
    default:
      return state;
  }
}
