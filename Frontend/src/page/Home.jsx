import { useReducer, useState } from "react";

export const Home = () => {
  let [input, setInput] = useState(0);
  //let count = 1000;

  function reducer(state, action) {
    switch (action.type) {
      case "inc":
        return {
          ...state,
          count: state.count + 500,
        };
      case "dec":
        return {
          ...state,
          count: state.count - 250,
        };
      case "calc":
        return {
          ...state,
          count: state.count + Number(action.payload),
        };
    }
  }

  function calculate(e) {
    e.preventDefault();

    dispatch({ type: "calc", payload: input });
  }
  const [state, dispatch] = useReducer(reducer, { count: 1000 });

  return (
    <>
      <div className="w-full min-h-full flex flex-col items-center overflow-x-hidden">
        <header className="w-full h-[70px] bg-gray-500"></header>
        <main className="w-full h-full">
          <div className="card m-3">
            <p className="">$Total Balance</p>
            <h1 className="">${state.count}</h1>
          </div>
          <div className="flex">
            <div className="card m-3" onClick={() => dispatch({ type: "inc" })}>
              <p className="">$Deposit Balance</p>

              <h1 className="">+500</h1>
            </div>
            <div className="card m-3" onClick={() => dispatch({ type: "dec" })}>
              <p className="">$Withdraw Balance</p>
              <h1 className="">-250</h1>
            </div>
          </div>

          <form
            action=""
            onSubmit={calculate}
            className="py-2 px-5 flex items-center space-x-3"
          >
            <label htmlFor="" className="text-2xl">
              Amount
            </label>
            <input
              type="Number"
              value={input}
              className="w-full h-fit p-3 bg-gray-700 text-white rounded-2xl"
              placeholder="Type.."
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="p-3 rounded-2xl bg-gray-700">
              Done
            </button>
          </form>

          <h1 className="my-3">Recent Transaction</h1>
          <div className="">
            <div
              className="TransactionCard m-3 flex"
              onClick={() => dispatch({ type: "dec" })}
            >
              <p className="">$Withdraw Balance</p>
              <h1 className="">-250</h1>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
