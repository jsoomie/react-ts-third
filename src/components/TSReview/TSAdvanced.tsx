import "./TSReview.css";
import { v4 as uuid } from "uuid";

export const TSAdvanced = () => {
  // UNION ///////////////////////////////////////////////////////
  const UnionTS = () => {
    const combine = (
      input1: number | string,
      input2: number | string,
      resultType: "as-number" | "as-text" // Literal Type Union
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
        <h2>Union and Literal Types</h2>
        <ul>
          <li>{combinedAges}</li>
          <li>{combinedNames}</li>
          <li>{combineStringAges}</li>
        </ul>
        <p>
          Allows the use of 2 or more types in items that needs it. Literal
          Types are for specific types set to something and only those types are
          valid.{" "}
        </p>
      </div>
    );
  };
  // UNION //

  // STAGE ///////////////////////////////////////////////////////
  const Stage = () => {
    const data = [
      { func: <UnionTS /> },
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
