import { programConstants } from '../constants';

const initialState = {
  isRunning: false,
  programFunktions:[
    {id: 1, funktion_id: 1},
    {id:2, funktion_id: 1 },
    {id:3, funktion_id: 2 }
  ]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case programConstants.CLEAR_PROGRAM:
      return {...state};
    case programConstants.PROGRAM_RUNNING:
      state.isRunning = true;
      return {...state};
    case programConstants.ADD_PROGRAM_FUNKTION:
      state.programFunktions.push({ id: state.programFunktions.length+1, funktion_id: action.payload })
      return {...state};
    default:
      return {...state};
  }
};
