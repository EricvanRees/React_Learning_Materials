import React from "react";

const { useState } = React;

export const SuperheroForm = () => {

  const powerSourceOptions = [
    'Bitten by a strange creature',
    'Radioactive exposure',
    'Science experiment',
    'Alien heritage',
    'Ancient artifact discovery',
    'Other'
  ];

  const powersOptions = [
    'Super Strength',
    'Super Speed',
    'Flight',
    'Invisibility',
    'Telekinesis',
    'Other'
  ];
  // state variables
  const [heroName, setHeroName] = useState('');
  const [realName, setRealName] = useState('');
  const [powerSource, setPowerSource] = useState('');
  const [powers, setPowers] = useState([]);

  /* Inside the function, destructure value and checked from e.target to get the value of the checkbox and whether it is checked or not. Next, update the list of checked powers. 
  Call the setPowers function, which takes an array argument. Use a ternary operator to check if checked is true. If it is, spread the existing powers array into a new array and add the value to it. If it is not true, filter out the value from powers with powers.filter(p => p !== value). */
  const handlePowersChange = e => {
    const { value, checked } = e.target;
    setPowers(checked ? [...powers, value] : powers.filter(p => p !== value));
  }

  return (
    <div className='form-wrap'>
      <h2>Superhero Application Form</h2>
      <p>Please complete all fields</p>
      {/* Tell the form how to submit. Add a method attribute with a value of post and an action attribute  */}
       <form method='post' action='https://superhero-application-form.freecodecamp.org'>
        <div className='section'>
          <label>
            Hero Name
            <input
              type='text'
              value={heroName}
              // required to update the input field when typing
              onChange={e => setHeroName(e.target.value)}
            />
          </label>
          <label>
            Real Name
            <input
              type='password'
              value={realName}
              // required to update the input field when typing
              onChange={e => setRealName(e.target.value)}
            />
          </label>
        </div>
        <label className='section column'>
          How did you get your powers?
          {/* use powerSource as the value of the select element. Then, set up an onChange handler using an arrow function that takes e as the parameter and implicitly returns setPowerSource(e.target.value).*/}
          <select value={powerSource} onChange={e => setPowerSource(e.target.value)}>
            <option value=''>
              Select one
            </option>
            {/* After the first option, use an arrow function to map through the powerSourceOptions array using source as the parameter. Then inside the map() method, create an option element with a key of source and a value of source. Lastly, use {source} to display the name of each power source in the dropdown. Use an arrow function to map through the powersOptions array using parameter of power. Inside the map, create a label element*/}
           {powerSourceOptions.map(source => (
             <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </label>
        <label className='section column'>
          List your powers (select all that apply):
          {/* Use an arrow function to map through the powersOptions array using parameter of power. Inside the map, create a label element */}          
          {powersOptions.map(power => (
            <label key={power}>
              {/* display the values from the array next to each checkbox by creating a span element just before the closing label with a text content of {power}. */}
              <input
                type='checkbox'
                value={power}
                /* To mark the checkboxes, add a checked attribute to the checkbox input. Use the includes method to verify if the current power is in the powers array. */
                checked={powers.includes(power)}
                onChange={handlePowersChange}
              />
              <span>{power}</span>
            </label>
          ))}
        </label>
        <button
        // Create a button element with the className of submit-btn and a type of submit.
          className='submit-btn'
          type='submit'
        /* you can submit the form without filling in the inputs. To stop that, add the disabled attribute to disable the submit button if heroName, realName, or powerSource are falsy, or if the length of powers is 0. */
          disabled={!heroName || !realName || !powerSource || powers.length === 0}
        >
          Join the League
        </button>
      </form>
    </div>
  )
};