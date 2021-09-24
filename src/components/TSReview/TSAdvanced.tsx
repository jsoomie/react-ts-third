import "./TSReview.css";
import { v4 as uuid } from "uuid";

export const TSAdvanced = () => {
  // UNION ///////////////////////////////////////////////////////
  const UnionTS = () => {
    return (
      <div className="review-card">
        <h1>Testing Here</h1>
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
