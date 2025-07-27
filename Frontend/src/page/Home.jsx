import { useReducer, useState } from "react";

export const Home = () => {
  const [isDark, setIsDark] = useState(false);
  const [input, setInput] = useState(0);
  const [transactions, setTransactions] = useState([]);

  function toogle() {
    setIsDark(!isDark);
  }

  const [state, dispatch] = useReducer(reducer, { count: 1000 });

  function reducer(state, action) {
    switch (action.type) {
      case "inc":
        return { ...state, count: state.count + 500 };
      case "dec":
        return { ...state, count: state.count - 250 };
      case "calc":
        return { ...state, count: state.count + Number(action.payload) };
      default:
        return state;
    }
  }

  function calculate(e) {
    e.preventDefault();
    if (isNaN(input) || input === 0) return;

    dispatch({ type: "calc", payload: input });

    const newTransaction = {
      amount: +input,
      label: +input > 0 ? "Custom Deposit" : "Custom Withdrawal",
    };

    setTransactions((prev) => [...prev, newTransaction]);
    setInput("");
  }

  return (
    <>
      <div
        className={`w-full min-h-screen flex flex-col items-center overflow-x-hidden bg-primary dark:bg-primary-dark text-primary-dark dark:text-primary ${
          isDark ? "dark" : ""
        }`}
      >
        <header className="w-full h-[70px] px-3 flex justify-between items-center bg-gray-500">
          <h2 className="">Expense Tracker</h2>
          <button
            className="w-fit h-fit p-3 text-2xl rounded-2xl bg-primary dark:bg-primary-dark"
            onClick={toogle}
          >
            {isDark ? "L" : "D"}
          </button>
        </header>
        <main className="w-full h-full">
          <div className="card m-3">
            <p className="">$Total Balance</p>
            <h1 className="">${state.count}</h1>
          </div>
          <div className="flex">
            <div className="card m-3" onClick={() => dispatch({ type: "inc" })}>
              <p>$Deposit Balance</p>
              <h1>+500</h1>
            </div>
            <div className="card m-3" onClick={() => dispatch({ type: "dec" })}>
              <p>$Withdraw Balance</p>
              <h1>-250</h1>
            </div>
          </div>

          <form
            onSubmit={calculate}
            className="py-2 px-5 flex items-center space-x-3"
          >
            <label className="text-2xl">Amount</label>
            <input
              type="number"
              value={input}
              className="w-full h-fit p-3 bg-accent dark:bg-gray-700 text-black dark:text-white rounded-2xl"
              placeholder="Type.."
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="p-3 rounded-2xl bg-gray-700 text-white"
            >
              Done
            </button>
          </form>

          <h1 className="my-3 ml-3 text-xl">Recent Transactions</h1>
          <div>
            {transactions.map((item, index) => (
              <div
                key={index}
                className={`m-3 flex justify-between items-center p-4 rounded-xl shadow cursor-pointer transition ${
                  item.amount < 0
                    ? "bg-green-100 text-green-800 dark:bg-red-100 dark:text-red-900"
                    : "bg-green-100 text-green-800 dark:bg-green-100 dark:text-green-900"
                }`}
              >
                <p className="text-lg font-medium">{item.label}</p>
                <h1 className="text-xl font-bold">${item.amount}</h1>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};
