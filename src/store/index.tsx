import { createStore } from "redux";

const emailReducer = (state = { success: false }, action: any) => {
  if (action.type === "sendMail") {
    return {
      success: true,
    };
  }

  return state;
};

const store = createStore(emailReducer);

export default store;
