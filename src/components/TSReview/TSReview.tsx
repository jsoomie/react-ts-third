import "./TSReview.css";
import { v4 as uuid } from "uuid";

export const TSReview = () => {
  // Core Types: number, string, boolean /////////////////////////
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
        <p>
          Created an adding function with specific types for the params which
          only takes in numbers for the first two and a boolean for the second.
        </p>
      </div>
    );
  };
  // Core Types: number, string, boolean //

  // Core Types: Object //////////////////////////////////////////
  // Types are usually inferred, however did this just for testing
  // Normal best practice is to let ts do its thing.
  const ObjectTS = () => {
    type PersonObject = {
      name: string;
      age: number;
      occupation: string;
    };

    const person: PersonObject = {
      name: "Kena",
      age: 20,
      occupation: "Spirit Guide",
    };

    return (
      <div id="object-ts" className="review-card">
        <h2>Objects</h2>
        <ul>
          <li>Name: {person.name}</li>
          <li>Age: {person.age}</li>
          <li>Occupation: {person.occupation}</li>
        </ul>
        <p>
          Types are usually inferred and best practice is to let it do its
          thing.
        </p>
      </div>
    );
  };
  // Core Types: Object //

  // Arrays //////////////////////////////////////////////////////
  const ArrayTS = () => {
    const employee = {
      name: "James",
      age: 30,
      hobbies: ["Games", "Cards", "Not working"],
    };

    let favoriteActivities: string[];
    // favoriteActivities = "running"; // This doesn't work, needs to be array
    favoriteActivities = ["running"];
    console.log(favoriteActivities);

    let hobby: string;
    for (hobby of employee.hobbies) {
      // Knows it is a string
      console.log(hobby.toUpperCase());

      // This doens't work because ts knows it is a string not array
      // console.log(hobby.map((hobby) => hobby))
    }

    return (
      <div id="array-ts" className="review-card">
        <h2>Arrays</h2>
        <ul>
          <li>Name: {employee.name}</li>
          <li>Age: {employee.age}</li>
        </ul>
        <ul>
          <li>Hobbies from array in object: </li>
          {employee.hobbies.map((hobby) => (
            <li key={uuid()}>{hobby.toLocaleUpperCase()}</li>
          ))}
        </ul>
        <p>
          Arrays from objects are inferred as such and ts knows it to be of
          certain types.
        </p>
      </div>
    );
  };
  // Arrays //

  // TUPLES //////////////////////////////////////////////////////

  // TUPLES //

  // LOOP ////////////////////////////////////////////////////////
  const data = [
    {
      func: <Basic />,
    },
    {
      func: <ObjectTS />,
    },
    {
      func: <ArrayTS />,
    },
  ];

  //Adds random ID to list
  const newData = data.map((data) => {
    return { ...data, id: uuid() };
  });

  // STAGE ///////////////////////////////////////////////////////
  const Stage = () => (
    <div id="reviewContainer">
      <h1>TS review page</h1>
      {newData.length ? (
        newData.map(({ id, func }) => <div key={id}>{func}</div>)
      ) : (
        <p>No Data Available</p>
      )}
    </div>
  );
  return <Stage />;
};

export default TSReview;
