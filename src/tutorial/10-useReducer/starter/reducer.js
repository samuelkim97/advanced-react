import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./actions";
import { data } from "../../../data";

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }

  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }

  if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter(({ id }) => id !== action.id);
    console.log(action);
    return {
      ...state,
      people: newPeople,
    };
  }

  throw new Error(`No matching "${action.type}" action type`);
};

export default reducer;
