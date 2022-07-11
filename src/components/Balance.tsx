import { Stack } from "react-bootstrap";
import { useAppSelector } from "../hooks/hooks";

const Balance = () => {
  const balance = useAppSelector((state) => state.expense.balance);
  const income = useAppSelector((state) => state.expense.income);
  const expense = useAppSelector((state) => state.expense.expense);
  return (
    <div className="px-4 py-4 mt-4 flex justify-between w-full bg-gray-100 rounded-md font-semibold">
      <Stack className="flex flex-col items-center w-full gap-2">
        <div className="text-lg">Your balance: ${balance}</div>
        <div className="flex justify-center bg-gray-50 w-full py-2 gap-8 rounded-md">
          <div className="flex flex-col">
            Income: <span className="text-green-600">${income}</span>
          </div>
          <div className="flex flex-col">
            Expense: <span className="text-red-600">${expense}</span>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default Balance;
