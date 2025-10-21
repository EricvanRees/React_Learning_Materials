/* 
In this workshop, you will continue to learn about the useEffect() hook by building an application that fetches fruit data from an API based on user input and displays the results dynamically.
*/
const { useState, useEffect } = React;

export function FruitsSearch() {
  // In React, controlled inputs are a standard way to handle form data, where the input's value is synced with the component's state.
  // To track what the user types into the search input field, create a state variable named query with an initial value of an empty string (''). Also define its corresponding setter function, setQuery, using the useState Hook.
  const [query, setQuery] = useState('');
  // When the user types into the input field, a list of fruits should appear that match their query. To handle this, create a state variable called results with an initial value of an empty array ([]). Also define its setter function, setResults, using the useState Hook.
  const [results, setResults] = useState([]);
  /* You will need a function for when the form gets submitted. Define a handleSubmit function that accepts an event object, e, and calls e.preventDefault(). */
  function handleSubmit(e) {
    e.preventDefault();
  }

  /* Now you will make your app get fruit names from the API when a user types in the input. First, add a useEffect hook so that it runs whenever the query state changes. Make sure to pass an arrow function as the first argument to useEffect, and include query in the dependency array. */
  useEffect(() => {
    /* Inside the useEffect callback, add an if condition to check if query.trim() === ''. This checks if query is an empty string or contains only spaces. If so, call setResults([]) and return early. */
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    /* If query is not empty, you want to get fruits that match the user input from the API, but only after users stop typing for a short period to avoid making the fetch call too frequently. To start, after the if statement, call setTimeout with an empty arrow function and a delay value of 700 as arguments, and store it in a variable called timeoutId. This allows you to cancel the timeout later when the effect cleans up. Next, update the first argument to setTimeout to an async arrow function. This allows you to use await inside the delayed logic. Inside that function, create a try...catch block to handle any potential errors when fetching data.*/
    const timeoutId = setTimeout(async () => {
      try {
        /* Inside the try block, call the fetch function and store the result in a variable named response. Since you're inside an async function, you should use await before fetch. */
        const response = await fetch(`https://fruit-search.freecodecamp.rocks/api/fruits?q=${query}`);
        /* Next, call .json() on the response and store the result in a variable called data. Since you're still inside an async function, you should use await before response.json(). */
        const data = await response.json();
        /* Now that you have the data from the API, update the results state by calling setResults and passing in an array that contains only the name property from each fruit in the data array. Use the map() method for this. */
        setResults(data.map(fruit => fruit.name));
      } catch (error) {
        /* For the catch block, add an error parameter, then use console.error to log any error that occurs while fetching or processing the data. */
        console.error("Error fetching data:", error);
      }
    }, 700);
    /* Below your timeoutId variable, return a cleanup function that clears the timeout using clearTimeout(timeoutId). This prevents multiple delayed fetches from stacking up. Make sure your cleanup function is an arrow function with an implicit return. */
    return () => clearTimeout(timeoutId); 
  }, [query]);
  return (
    <div id="search-container">
      {/* add a form where users can search for fruits.*/}
      { /* Pass the handleSubmit function to the onSubmit prop of the form element so the form submission can be handled correctly. */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-input">Search for fruits:</label>
        <input
          id="search-input"
          type="search"
          // Bind the input's displayed value to your React state by adding a value attribute to your search input set to the query state's value.
          value={query}
          // Add an onChange attribute to the input to capture what the user types. Set it to an arrow function that takes e as an argument. Inside the function, update the query state by passing e.target.value to the setter function, which holds the current value of the input. 
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      {/* After the form, add a div element with an id of results that will display the search results. */}
      <div id="results">
        {/* Inside the #results element, use a ternary operator to check if the length of results array is greater than zero. If it is, map over the items and display each one in a p element with a class of result-item. Be sure to include a key attribute with each paragraph as well. If results it's empty, render a p element with the message No results found.*/}
        {results.length > 0 ? (
          results.map(item => (
            <p key={item} className="result-item">{item}</p>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}