import { programConstants } from '../constants';

export function clearProgram() {
  return {
    type: programConstants.CLEAR_PROGRAM
  }
}

export function programRunning() {
  return {
    type: programConstants.PROGRAM_RUNNING
  }
}

export function addProgramFunktion(funktion_id) {
  return {
    type: programConstants.ADD_PROGRAM_FUNKTION,
    payload: funktion_id
  }
}
