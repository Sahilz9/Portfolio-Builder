import { SET_COLOR, SetColorAction } from "./action";

interface SolidState {
  color: string;
}

const initState: SolidState = {
  color: "white",
};

export const solidReducer = (
  state: SolidState = initState,
  action: SetColorAction
): SolidState => {
  switch (action.type) {
    case SET_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};
