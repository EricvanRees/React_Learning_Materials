const { useState } = React;

export const ToggleApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div id="toggle-container">
    <p>{isVisible ? "Hide Message" : "Show Message"}</p><button onClick={handleToggleVisibility} id="toggle-button">Message</button>
    {isVisible && <p id="message">I love freeCodeCamp!</p>}
    </div>
  );
};