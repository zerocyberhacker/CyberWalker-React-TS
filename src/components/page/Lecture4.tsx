/** @format */

import {
  BaseSyntheticEvent,
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState
} from "react";
import { NavLink } from "react-router-dom";

const Lecture4: React.FC = () => {
  const [day, setDay] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | BaseSyntheticEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    console.log(value);
    // alert(`The day you choose was: ${value}`);
    setDay(value);
  };

  return (
    <>
      <h1>This is Lecture 4.</h1>
      <p>
        <NavLink to={"/"}>back</NavLink>
      </p>
      <br />
      <form onSubmit={handleSubmit} className='day-form'>
        <h1>What is today ?</h1>
        <input
          type='radio'
          name='day'
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={"Monday"}
        />
        <label>Monday</label>
        <br />
        <input
          type='radio'
          name='day'
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={"Tuesday"}
        />
        <label>Tuesday</label>
        <br />
        <input
          type='radio'
          name='day'
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={"Wednesday"}
        />
        <label>Wednesday</label>
        <br />
        <input
          type='radio'
          name='day'
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={"Thursday"}
        />
        <label>Thursday</label>
        <br />
        <input
          type='radio'
          name='day'
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={"Friday"}
        />
        <label>Friday</label>
        <br />
        <input
          type='radio'
          name='day'
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={"Saturday"}
        />
        <label>Saturday</label>
        <br />
        <input
          type='radio'
          name='day'
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={"Sunday"}
        />
        <label>Sunday</label>
        <br />
        <br />
        <button>Submit</button>
      </form>
      {day === "Monday" && <h1>Work Hard....</h1>}
      {day === "Tuesday" && <h1>Tired....</h1>}
      {day === "Friday" && <h1>Happy Friday!!!</h1>}
      {day === "Saturday" && <h1>Happy Saturday!!!</h1>}
      {day === "Sunday" && <h1>Happy Sunday!!!</h1>}
    </>
  );
};

export default Lecture4;
