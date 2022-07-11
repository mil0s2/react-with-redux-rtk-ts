import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./features/expensesSlice";

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
