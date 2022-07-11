import { useAppSelector } from "../hooks/hooks";

const ExpensesHistory = () => {
  const expenses = useAppSelector((state) => state.expense.expensesHistory);

  const expensesList = expenses.map((item, i) => {
    const { expenseName, amount } = item;
    return (
      <div
        key={i}
        className={`${
          item.amount > 0
            ? "bg-green-400 border-green-300"
            : "bg-red-400 border-red-300"
        } w-full justify-between border shadow-md flex gap-4 px-4 py-2 rounded-lg`}
      >
        <div className="text-white">{expenseName}</div>
        <div>
          {amount} <span>zł</span>
        </div>
      </div>
    );
  });
  return (
    <div className="flex w-full flex-col items-center gap-2">
      {expensesList.length > 0 ? expensesList : "No transactions yet"}
    </div>
  );
};

export default ExpensesHistory;
