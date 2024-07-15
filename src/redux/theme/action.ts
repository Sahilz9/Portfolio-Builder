export const SET_COLOR = "SET_COLOR";

export interface SetColorAction {
  type: typeof SET_COLOR;
  payload: string;
}

export const setColor = (color: string): SetColorAction => ({
  type: SET_COLOR,
  payload: color,
});
