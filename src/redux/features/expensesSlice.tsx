import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExpensesState {
  balance: number;
  expense: number;
  income: number;
  expensesHistory: {
    expenseName: string;
    amount: number;
  }[];
}

export interface IExpense {
  expenseName: string;
  amount: number | string;
}

const initialState: ExpensesState = {
  balance: 0,
  expense: 0,
  income: 0,
  expensesHistory: [],
};

export const expensesSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpenseToHistory: (state, action: PayloadAction<IExpense>) => {
      const { payload } = action;
      if (typeof payload.amount !== "number") {
        state.expensesHistory.push({
          expenseName: payload.expenseName,
          amount: +payload.amount,
        });
      }
    },
    calculateBalance: (state, action: PayloadAction<void>) => {
      state.balance = state.expensesHistory.reduce(
        (acc, expense) => acc + expense.amount,
        0
      );
    },
    calculateIncome: (state) => {
      state.income = state.expensesHistory.reduce((acc, expense) => {
        if (expense.amount > 0) return acc + expense.amount;
        return acc;
      }, 0);
    },
    calculateExpenses: (state) => {
      state.expense = state.expensesHistory.reduce((acc, expense) => {
        if (expense.amount < 0) return acc + Math.abs(expense.amount);
        return acc;
      }, 0);
    },
  },
});
