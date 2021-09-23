import "./Clicker.css";
import { useState } from "react";
import { TiArrowUpOutline, TiArrowDownOutline } from "react-icons/ti";

export const Clicker = () => {
  const defaultCount = 0;
  const defaultNegative = false;

  const [count, setCount] = useState(defaultCount);
  const [negative, setNegative] = useState(defaultNegative);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    if (!negative && count <= 0) {
      setCount(defaultCount);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  const allowNegative = () => {
    if (!negative) {
      setNegative(true);
    } else {
      setNegative(false);
      setCount(defaultCount);
    }
  };

  const Stage = () => (
    <div id="clicker">
      {negative ? (
        <h3>Negatives currently allowed</h3>
      ) : (
        <h3>Negatives not allowed</h3>
      )}
      <h1>{count}</h1>
      <button className="upButton" onClick={increaseCount}>
        <TiArrowUpOutline />
      </button>
      <button className="downButton" onClick={decreaseCount}>
        <TiArrowDownOutline />
      </button>

      <div>
        <button className="negativeButton" onClick={allowNegative}>
          {negative ? "Disallow Negatives" : "Allow Negatives"}
        </button>
      </div>
    </div>
  );

  return <Stage />;
};

export default Clicker;
