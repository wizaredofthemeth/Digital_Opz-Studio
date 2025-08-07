import React from "react";

function MyComponent() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default MyComponent;
