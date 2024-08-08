import { createStore, combineReducers, applyMiddleware } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

// const initialStateAccount = {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
// };

// const initialStateCustomer = {
//   fullName: "",
//   nationalID: "",
//   createAt: "",
// };

// function accountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload };
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       // LATER
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     default:
//       return state;
//   }
// }

// 263
// const store = createStore(accountReducer);
// console.log("Redux hell");
// store.dispatch({ type: "account/deposit", payload: 1000 });
// console.log("deposit 1000: ", store.getState());
// store.dispatch({
//   type: "account/requestLoan",
//   payload: { amount: 1000, purpose: "buy a car" },
// });
// console.log("request loan 1000: ", store.getState());
// store.dispatch({ type: "account/payLoan" });
// console.log("payLoan: ", store.getState());

// 264 working with action creators
// function deposit(amount) {
//   return { type: "account/deposit", payload: amount };
// }

// function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount: amount, purpose: purpose },
//   };
// }
// function payLoan() {
//   return { type: "account/payLoan" };
// }

// const store = createStore(accountReducer);

// console.log("Redux hell");
// store.dispatch(deposit(1000));
// console.log("deposit 1000: ", store.getState());
// store.dispatch(requestLoan(1000, "buy a car"));
// console.log("request loan 1000: ", store.getState());
// store.dispatch(payLoan());
// console.log("payLoan: ", store.getState());

// 265 adding more state: customer
// function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalID: action.payload.nationalID,
//         createAt: action.payload.createAt,
//       };
//     case "customer/updateName":
//       return { ...state, fullName: action.payload.fullName };
//     default:
//       return state;
//   }
// }

// function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalID, createAt: new Date().toISOString() },
//   };
// }

// function updateName(fullName) {
//   return { type: "account/updateName", payload: { fullName } };
// }

// store.dispatch(createCustomer("Jiaying Liang", "5318698"));
// store.dispatch(deposit(1000));
// console.log(store.getState());
