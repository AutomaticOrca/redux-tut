import { createSlice } from "@reduxjs/toolkit";
import accountSlice from "../accounts/accountSlice";

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: initialStateCustomer,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalID) {
        return {
          payload: { fullName, nationalID },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        state.createAt = new Date().toISOString();
      },
    },
    updateName(state, action) {
      state.fullName = action.payload.fullName;
    },
  },
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;

// classical redux
/*
const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createAt: "",
};

export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createAt: action.payload.createAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload.fullName };
    default:
      return state;
  }
}

export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: "account/updateName", payload: { fullName } };
}
*/
