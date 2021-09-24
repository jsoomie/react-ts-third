import "./TSReview.css";
import { v4 as uuid } from "uuid";

export const TSReview = () => {
  // Core Types: number, string, boolean /////////////////////////
  const Basic = () => {
    const hello: string = "hello world";
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
        <h4>number: {add(firstNumber, secondNumber, result)}</h4>
        <h4>string: {hello}</h4>
        {result && <h4>boolean: true</h4>}
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
  const TuplesTS = () => {
    type MemberType = {
      name: string;
      age: 12;
      hobbies: string[];
      role: [number, string];
    };

    const member: MemberType = {
      name: "Alice",
      age: 12,
      hobbies: ["Reading", "Exploring"],
      // At first, ts creates union array of number | string
      // However, we ONLY want 2 things in the array
      // role: [2, "jumper"],
      // memeber.role.push("this works");
      role: [2, "jumper"],
    };

    member.role.push("Still Works, unfortunately");
    // member.role[1] = 10; // this errors out
    member.role = [0, "new role"]; // Works as well
    // member.role = [0, "hello world", "blah"] // Errors

    return (
      <div id="tuples-ts" className="review-card">
        <h2>Tuples</h2>
        <ul>
          <li>Name: {member.name}</li>
          <li>Age: {member.age}</li>
          <li>Hobbies: </li>
          {member.hobbies.map((hobby) => (
            <li key={uuid()}>{hobby}</li>
          ))}
          <li>Role Number: {member.role[0]}</li>
          <li>Role Name: {member.role[1].toUpperCase()}</li>
        </ul>
        <p>
          TS will only catch tuples TYPES, if specified 2 types, those types
          will be enforced, however, if pushing an item from outside, TS won't
          catch that
        </p>
      </div>
    );
  };
  // TUPLES //

  // ENUMS ///////////////////////////////////////////////////////
  const EnumsTS = () => {
    // const NOVICE = 0;
    // const AMATEUR = 1;
    // const PRACTITIONER = 3;
    // console.log(NOVICE, AMATEUR, PRACTITIONER);
    // using enums so to condense code above //

    enum Rank {
      NOVICE,
      AMATEUR,
      PRACTITIONER,
    }

    const kain = {
      name: "Kain",
      class: "Warrior",
      mana: 124,
      talents: ["Chef II", "Blacksmith III", "Symbology I"],
      // rank: Rank[Rank.NOVICE].toLocaleLowerCase(),
      rank: Rank.PRACTITIONER,
    };

    return (
      <div id="enums-ts" className="review-card">
        <h2>Enums</h2>
        <ul>
          <li>Name: {kain.name}</li>
          <li>Class: {kain.class}</li>
          <li>Mana Pool: {kain.mana}</li>
          <li>Talents: {kain.talents.join(", ")}</li>
          <li>
            Rank: #{kain.rank} - {Rank[kain.rank].toLocaleLowerCase()}
          </li>
        </ul>
        <p>Automatically enumerated global constant identifiers</p>
      </div>
    );
  };
  // ENUMS //

  // LOOP ////////////////////////////////////////////////////////
  const data = [
    { func: <Basic /> },
    { func: <ObjectTS /> },
    { func: <ArrayTS /> },
    { func: <TuplesTS /> },
    { func: <EnumsTS /> },
    // Add new functions here
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
