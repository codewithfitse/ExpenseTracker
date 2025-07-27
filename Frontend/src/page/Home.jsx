import { useReducer, useState } from "react";

export const Home = () => {
  let [input, setInput] = useState();
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
            <p className="text-2xl">$Total Balance</p>
            <h1 className="text-2xl">${state.count}</h1>
          </div>
          <div className="flex">
            <div className="card m-3"></div>
            <div className="card m-3"></div>
          </div>
          <button
            className="p-3 rounded-2xl bg-amber-50 text-black"
            onClick={() => dispatch({ type: "inc" })}
          >
            +500
          </button>
          <button
            className="p-3 rounded-2xl bg-amber-50 text-black"
            onClick={() => dispatch({ type: "dec" })}
          >
            -250
          </button>

          <form action="su" onSubmit={calculate}>
            <input
              type="Number"
              value={input}
              className="p-3 bg-amber-50 text-black rounded-2xl"
              placeholder="Type.."
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="p-3 rounded-2xl bg-amber-50 text-black"
            >
              Done
            </button>
          </form>
        </main>
      </div>
    </>
  );
};
