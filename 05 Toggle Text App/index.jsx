// In previous lessons, you learned about state and how to work with the useState hook.
const { useState } = React;

export const ToggleApp = () => {
  // useState returns an array of two values. The first value is the current state. The second value is the set function that will be used to update state.
  // The state will only be updated on the next render cycle.
  const [isVisible, setIsVisible] = useState(false);
  // create a function that will be responsible for toggling the visibility for the text.
  // It is common practice to use the logical NOT (!) operator to toggle between true and false.
  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div id="toggle-container">
      {/* button functionality that will handle the toggle visibility for the paragraph text. */}
      {/* when you click on the button, you will see the visibility of the paragraph text toggle between hidden and shown on the page.*/}
      {/* use the ternary operator to conditionally display the words Hide or Show for the message button. */}
    <button onClick={handleToggleVisibility} id="toggle-button">{isVisible ? "Hide Message" : "Show Message"}</button>
    {/* It is a common pattern to use the logical AND (&&) operator to conditionally render a piece of text */}
    {isVisible && <p id="message">I love freeCodeCamp!</p>}
    </div>
  );
};