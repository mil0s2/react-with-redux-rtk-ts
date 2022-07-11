import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAppDispatch } from "../hooks/hooks";
import {
  addExpenseToHistory,
  calculateBalance,
  calculateExpenses,
  calculateIncome,
  IExpense,
} from "../redux/features/expensesSlice";

const TransactionForm = () => {
  const dispatch = useAppDispatch();

  const [expense, setExpense] = useState<IExpense>({
    expenseName: "",
    amount: "",
  });
  const onChange = <K extends keyof IExpense>(key: K, value: IExpense[K]) => {
    setExpense({ ...expense, [key]: value });
  };

  const onFormSubmit = () => {
    if (
      typeof expense.amount === "string" &&
      !isNaN(parseFloat(expense.amount))
    ) {
      dispatch(addExpenseToHistory(expense));
      dispatch(calculateBalance());
      dispatch(calculateIncome());
      dispatch(calculateExpenses());
    }
  };

  return (
    <div className="gap-4 bg-gray-200 w-full px-4 py-4 rounded-lg flex flex-col items-center">
      <h3 className="text-xl tracking-wide font-semibold">
        Add New Transaction
      </h3>
      <Form.Group
        className="gap-2 mb-3 flex flex-col w-full"
        controlId="expenseName"
      >
        <Form.Label className="font-semibold">Name</Form.Label>
        <Form.Control
          onChange={(e) =>
            onChange(e.target.name as keyof IExpense, e.target.value)
          }
          className="outline-none hover:bg-gray-50 focus:bg-gray-50 bg-gray-100 p-2 rounded-md"
          name="expenseName"
          type="text"
          placeholder="Expense name"
        />
      </Form.Group>
      <Form.Group
        className="gap-2 mb-3 flex flex-col w-full"
        controlId="expenseAmount"
      >
        <Form.Label className="font-semibold">Amount</Form.Label>
        <Form.Control
          onChange={(e) =>
            onChange(e.target.name as keyof IExpense, e.target.value)
          }
          className="outline-none hover:bg-gray-50 focus:bg-gray-50 bg-gray-100 p-2 rounded-md"
          name="amount"
          type="text"
          placeholder="Amount"
        />
      </Form.Group>
      <Button
        className="w-full bg-sky-400 rounded-full px-4 py-2 text-white"
        onClick={onFormSubmit}
      >
        Add transaction
      </Button>
    </div>
  );
};

export default TransactionForm;
