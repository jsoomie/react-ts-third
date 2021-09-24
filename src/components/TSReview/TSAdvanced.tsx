import "./TSReview.css";
import { v4 as uuid } from "uuid";

type StageReturn = () => JSX.Element;

export const TSAdvanced = () => {
  // UNION ///////////////////////////////////////////////////////
  const UnionTS: StageReturn = () => {
    // Types
    type Combinable = number | string;
    type ConversionType = "as-number" | "as-text";

    const combine = (
      input1: Combinable, // Type alias to use number or string
      input2: Combinable,
      resultType: ConversionType // Literal Type Union
      // Has to be those two strings states above
    ) => {
      let result;
      if (
        (typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number"
      ) {
        result = +input1 + +input2;
      } else {
        result = `${input1.toString()} ${input2.toString()}`;
      }
      return result;

      // if (resultType === "as-number") {
      //   return result;
      // } else {
      //   return result.toString();
      // }
    };

    const combinedAges = combine(20, 30, "as-number");
    const combinedNames = combine("June", "Smith", "as-text");
    const combineStringAges = combine("10", "20", "as-number");

    return (
      <div className="review-card">
        <h2>Union / Literal /Type Aliases</h2>
        <ul>
          <li>{combinedAges}</li>
          <li>{combinedNames}</li>
          <li>{combineStringAges}</li>
        </ul>
        <p>
          Allows the use of 2 or more types in items that needs it. Literal
          Types are for specific types set to something and only those types are
          valid. Use type aliases to make it reusable of a certain type
          inputted.
        </p>
      </div>
    );
  };
  // UNION //

  // FUNCTION RETURN TYPES ///////////////////////////////////////
  const FunctionsTS: StageReturn = () => {
    // Leave it to type inferrence
    const adding = (n1: number, n2: number): number => {
      // Type added for demo purposes
      return n1 + n2; // Returns Number type
      // return n1.toString() + n2.toString(); // Returns string type
    };

    const printResult = (num: number): void => {
      // Type added for demo purposes only
      console.log(`Result: ${num}`);
      // returns VOID
    };

    printResult(1);

    // Specifying function type
    let combinedStuff: (x: number, b: number) => number;
    combinedStuff = adding;
    // combinedStuff = printResult;
    // Doesn't work because wrong amount of params and type of

    return (
      <div className="review-card">
        <h2>Function Types</h2>
        <ul>
          <li>{adding(1, 2)}</li>
          <li>{combinedStuff(1000, 24000)}</li>
        </ul>
        <p>
          Functions not returning anything is returning type void. Undefined is
          also a thing, but normally void is used unless undefined is a must
          returned item for whatever use. Function Types allows us to specify
          which types of function we want passed in.
        </p>
      </div>
    );
  };
  // FUNCTION RETURN TYPES //

  // CALLBACK ////////////////////////////////////////////////////
  const CallbackTS: StageReturn = () => {
    const addAndHandle = (
      n1: number,
      n2: number,
      cb: (num: number) => void
    ) => {
      const result = n1 + n2;
      cb(result);
    };

    addAndHandle(10, 20, (result) => {
      console.log(result);
    });

    return (
      <div className="review-card">
        <h2>Callbacks</h2>
        <p>
          Callbacks in functions ts can be very strict with the callbacks and
          setting to return to void to avoid returning anything. Void and then
          theres never type intended for error catching where it would crash the
          script. They can also be void, but specifically is never.
        </p>
      </div>
    );
  };
  // CALLBACK //

  // STAGE ///////////////////////////////////////////////////////
  const Stage = () => {
    const data = [
      { func: <UnionTS /> },
      { func: <FunctionsTS /> },
      { func: <CallbackTS /> },
      // Add new functions here
    ];

    return (
      <div id="advancedContainer">
        <h1>TS ADVANCED</h1>
        {data.length ? (
          data.map(({ func }) => <div key={uuid()}>{func}</div>)
        ) : (
          <p>No Data Available</p>
        )}
      </div>
    );
  };
  return <Stage />;
};
