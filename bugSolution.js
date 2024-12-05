```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    // Correct logic: Return a cleanup function
    const id = setTimeout(() => {
      console.log('Timeout fired!');
    }, 1000);
    setTimerId(id);

    return () => {
      clearTimeout(id);
      console.log('Timeout cleared!');
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```