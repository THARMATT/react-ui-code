import React from 'react';

const MyComponent = () => {
 // Empty dependency array ensures that the effect runs only once, similar to componentDidMount and componentWillUnmount in class components

  return (
    <div>
      <h1>Click anywhere in the document!</h1>
    </div>
  );
};

export default MyComponent;
