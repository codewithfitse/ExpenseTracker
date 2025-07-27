import { useReducer, useState } from "react";

export const Home = () => {
  let [input, setInput] = useState("");
  let [initail, setInitail] = useState(1000);

  function add() {
    setInitail(initail + 500);
  }

  function del() {
    setInitail(initail - 250);
  }

  const [state, dispatch] = useReducer(reducer, initail);

  return (
    <>
      <div className="mt-10 flex justify-center">
        <h1 className="text-white text-2xl">{initail}</h1>
        <button
          className="p-3 rounded-2xl bg-amber-50 text-black"
          onClick={add}
        >
          +500
        </button>
        <button
          className="p-3 rounded-2xl bg-amber-50 text-black"
          onClick={del}
        >
          -250
        </button>

        <input
          type="text"
          className="p-3 bg-amber-50 text-black rounded-2xl"
          placeholder="Type.."
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="p-3 rounded-2xl bg-amber-50 text-black"
          onClick={del}
        >
          Done
        </button>
      </div>
    </>
  );
};
