import "./TSReview.css";

export const TSReview = () => {
  // Core Types: number, string, boolean ////
  const Basic = () => {
    const firstNumber = 5;
    const secondNumber = 2.3;
    const result = true;
    const add = (one: number, two: number, show: boolean) => {
      if (show) {
        return one + two;
      } else {
        return "Nothing to show...";
      }
    };

    return (
      <div id="basic-ts" className="review-card">
        <h2>Number, String, Boolean</h2>
        <p>{add(firstNumber, secondNumber, result)}</p>
      </div>
    );
  };
  // Core Types: number, string, boolean //

  // Core Types: Object ////
  const ObjectTS = () => {
    const person = {
      name: "Kena",
      age: 20,
    };

    return (
      <div id="object-ts" className="review-card">
        <h2>Objects</h2>
        <ul>
          <li>{person.name}</li>
          <li>{person.age}</li>
        </ul>
      </div>
    );
  };
  // Core Types: Object //

  // STAGE ////
  const Stage = () => (
    <div id="reviewContainer">
      <h1>TS review page</h1>
      <Basic />
      <ObjectTS />
    </div>
  );
  return <Stage />;
};

export default TSReview;
