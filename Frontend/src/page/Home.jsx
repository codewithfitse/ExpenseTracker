import { useReducer, useState } from "react";

export const Home = () => {
  let [input, setInput] = useState("");
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
          count: action.payload,
          ...state.count,
        };
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 1000 });

  return (
    <>
      <div className="mt-10 flex justify-center">
        <h1 className="text-white text-2xl">{state.count}</h1>
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

        <input
          type="text"
          value={input}
          className="p-3 bg-amber-50 text-black rounded-2xl"
          placeholder="Type.."
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="p-3 rounded-2xl bg-amber-50 text-black"
          onClick={() => dispatch({ type: "calc", payload: state.count })}
        >
          Done
        </button>
      </div>
    </>
  );
};
