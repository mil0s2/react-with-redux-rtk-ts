import Balance from "./components/Balance";
import ExpensesHistory from "./components/ExpensesHistory";
import TransactionForm from "./components/TransactionForm";

function App() {
  return (
    <div className="w-full items-center p-[20%] flex flex-col gap-4">
      <Balance />
      <TransactionForm />
      <ExpensesHistory />
    </div>
  );
}

export default App;
