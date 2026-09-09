# `useEffect` hook in react

## What is `useEffect` hook

- With `useEffect` hook we can apply side effect into function component.
- A side effect is any work a component does after it renders that is not directly related to showing UI.
- Examples :
  - Fetching data from an API
  - Setting a timer
  - Saving data to localStorage
  - Logging to the console
  - Updating the browser title8[]
- React's function component does not have lifecycle method like class components. `useEffect` hook replaces these class lifecycle methods in function components.
- A single useEffect can handle all three lifecycle phases : `componentDidMount`, `ComponentDidUpdate`, `ComponentWillUnmount`

## How to use `useEffect` hook

```jsx
import { useEffect } from "react";

useEffect(() => {
  // effect: runs after the DOM is updated

  return () => {
    // cleanup (optional): runs before the next effect, or on unmount
  };
}, [dependencies]); // dependency array (optional)
```

How it works:

- The dependency array tells React which reactive values (props, state, or anything derived from them) the effect reads. On every render, React compares each entry to its previous value using `Object.is` (essentially `===`) and re-runs the effect only if something changed.

- React watches the values in the dependency array.
  - If any dependency changes, the callback runs.
  - If array is absent / set to `null` then it runs on every render.
  - If array is present but empty (`[]`), it runs only on first render.
  - If array is present and has dependencies in, whenever the any dependency changes it re-runs the side effect.
- `useEffect` return a callback function which can used to perform cleanup after the component unmount
- The cleanup function in useEffect is used to clean up tasks started by the effect.

### Example 1

```jsx
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [clicks1, setClicks1] = useState(0);
  const [clicks2, setClicks2] = useState(0);

  useEffect(() => {
    console.log("Running useEffect callback function");
    // when clicks2 is changes,this prints
  }, [clicks2]);

  return (
    <>
      <div>
        <h1>Clicks 1 : {clicks1}</h1>
        <h1>Clicks 2 : {clicks2}</h1>
        <button
          onClick={() => {
            setClicks1((prev) => prev + 1);
          }}
        >
          Click me 1
        </button>
        <button
          onClick={() => {
            setClicks2((prev) => prev + 1);
          }}
        >
          Click me 2
        </button>
      </div>
    </>
  );
}

export default App;
```

#### double invocation of effects in StrictMode

- In development mode only, `useEffect` runs twice when react app starts. Initially React mounts, unmounts, and remounts components to check if effects are properly cleaned up. This is not a bug but an intentional feature of StrictMode to detect missing cleanup functions.
- In production builds, `useEffect` runs only once on mount.
- To stop `useEffect` from running twice in development
  1. Removing `StrictMode` from your app.
     - In `main.jsx` or `index.js`, remove the `<StrictMode>` wrapper.

     ```javascript
       // Before:
       <StrictMode> <App /> </StrictMode>

       // After:
       <App />
     ```
  - This will make `useEffect` run once on mount in development.
  2. Removing `StrictMode` is not recommended because it helps catch bugs in development. The correct way is to keep `StrictMode` and provide a proper cleanup function in `useEffect`.

  ```javascript
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("running");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  ```

  - With cleanup, the first mount unmounts cleanly and the second mount works without issues. With this `StrictMode` remains enabled and your effect works correctly.

  ```jsx
  import { useEffect, useState } from "react";
  import "./index.css";

  function App() {
    const [timerCounter, setTimerCounter] = useState(0);

    useEffect(() => {
      console.log("Running useEffect Hook");

      const interval = setInterval(() => {
        setTimerCounter((prev) => prev + 1);
      }, 1000);
      // if we do not cleanup this interval then 2  setInterval function will run and  counter will be updated twice

      return () => {
        console.log("Running cleanup for useEffect Hook");
        clearInterval(interval);
      };
    }, []);

    return (
      <div className="flex flex-col justify-center min-h-screen bg-gray-900">
        <div className="flex flex-col items-center justify-center mx-10 my-5 p-6 bg-white border border-gray-200 shadow-md rounded-lg">
          <h1 className="mb-5 font-extrabold text-4xl">{timerCounter}</h1>
        </div>{" "}
      </div>
    );
  }

  export default App;
  ```

## When to use `useEffect` hook

- `useEffect` is used for task that does not change UI explicitly but can be used to do so
- Use-case 1 : API Calling
  1. When a component renders for the first time, it can make an API call to fetch data from a database. This logic is usually placed inside `useEffect`, and the fetched data is stored in a state variable.
  2. If the user clicks a "Refresh Data" button, a state variable in the dependency array can be updated. Since the dependency changes, `useEffect` runs again and makes the API call to fetch the latest data.

## Advance usage of `useEffect` hook

```jsx
import React, { useEffect, useState } from "react";

export default function Interval() {
  let [counter1, setCounter1] = useState(0);
  useEffect(() => {
    const interval1 = setInterval(() => {
      console.log("Creating interval 1");
      setCounter1((prev) => prev + 1);
    }, 1000);
  }, []);

  let [counter2, setCounter2] = useState(0);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setCounter2((prev) => {
        console.log(`Running interval ${prev}`);
        return prev + 1;
      });
    }, 1000);

    // Cleanup function - runs when component unmounts
    return () => {
      clearInterval(interval2);
      console.log("Clearing interval 2");
    };
  }, []);

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        Counter App
      </h2>

      <div className="space-y-3 w-full">
        <div className="px-4 py-3 w-full font-medium text-blue-700 text-center bg-blue-50 rounded-lg">
          Counter 1: <span className="font-bold text-blue-900">{counter1}</span>
        </div>

        <div className="px-4 py-3 w-full font-medium text-center text-green-700 bg-green-50 rounded-lg">
          Counter 2:{" "}
          <span className="font-bold text-green-900">{counter2}</span>
        </div>
      </div>
    </div>
  );
}
```

```jsx
import { useState, useEffect } from "react";

export default function FetchApi() {
  const [counter, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);
  const [pageOffset, setPageOffset] = useState(1);

  const fetchData = () => {
    console.log("Fetching api data");

    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${pageOffset}}&_limit=10`,
    )
      .then((response) => response.json())
      .then((json) => setPosts([...json]));
  };

  useEffect(fetchData, [pageOffset]);

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-6xl w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        Fetch API
      </h2>

      {/* Counter Section */}
      <div className="mb-6 p-4 w-full bg-gray-50 rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl text-gray-800">
            Counter: <span className="text-blue-600">{counter}</span>
          </h1>
          <button
            onClick={() => setCounter((prev) => prev + 1)}
            className="px-6 py-2 font-semibold text-white bg-blue-500 duration-200 transition active:scale-95 hover:bg-blue-600 rounded-lg"
          >
            Increment to {counter + 1}
          </button>
        </div>
      </div>

      {/* Next Page Button */}
      <div className="mb-6 w-full">
        <button
          onClick={() => setPageOffset((prev) => prev + 1)}
          className="px-6 py-3 w-full font-semibold text-white bg-green-500 duration-200 transition active:scale-95 hover:bg-green-600 rounded-lg"
        >
          Next 10 Posts (Page {pageOffset + 1})
        </button>
      </div>

      {/* Posts Grid */}
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

function PostCard({ post }) {
  return (
    <div className="flex flex-col mx-10 my-5 p-6 max-w-md w-full bg-white border border-gray-200 shadow-lg duration-300 transition-shadow hover:shadow-xl rounded-2xl">
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-200">
        <span className="px-3 py-1 font-semibold text-blue-700 text-xs bg-blue-100 rounded-full">
          Post #{post.id}
        </span>
        <span className="text-gray-500 text-xs">User ID: {post.userId}</span>
      </div>

      <h3 className="mb-3 font-bold text-gray-800 text-lg line-clamp-2">
        {post.title}
      </h3>

      <p className="leading-relaxed text-gray-600 text-sm whitespace-pre-line">
        {post.body}
      </p>
    </div>
  );
}
```

## Common Mistakes with `useEffect` hook

### 1. Updating State in useEffect Without Condition

Problem

Updating state directly inside useEffect without any condition causes an infinite loop.

```javascript
useEffect(() => {
  setCount(count + 1);
});
```

Internal Working and Error

The effect runs after every render. Updating state triggers a re-render. The re-render triggers the effect again. This continues forever.

Solution

Add a condition or dependency array to control when the effect runs.

```javascript
useEffect(() => {
  if (count < 5) {
    setCount(count + 1);
  }
}, [count]);
```

### 2. Missing Dependency Array in useEffect

#### Problem

Not providing a dependency array makes the effect run after every render.

```javascript
useEffect(() => {
  fetchData();
});
```

#### Internal Working and Error

The effect executes on mount and after every state change or re-render. This causes unnecessary API calls or side effects.

#### Solution

Always provide a dependency array. Use an empty array to run only once on mount.

```javascript
useEffect(() => {
  fetchData();
}, []);
```

### 3. Incorrect Dependency Array Values

#### Problem

Using wrong or missing values inside the dependency array gives stale data.

```javascript
useEffect(() => {
  console.log(userId);
}, []);
```

#### Internal Working and Error

The effect captures the initial value of userId. It will not update when userId changes. This leads to outdated values or logic errors.

#### Solution

Include all variables used inside the effect in the dependency array.

```javascript
useEffect(() => {
  console.log(userId);
}, [userId]);
```

### 4. Not Using Cleanup Function

#### Problem

Not returning a cleanup function from useEffect causes memory leaks and unwanted behavior.

```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);
}, []);
```

#### Internal Working and Error

The interval keeps running even after the component unmounts. This wastes memory and can cause errors if state is updated after unmount.

#### Solution

Return a cleanup function to stop intervals, cancel requests, or remove listeners.

```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

### 5. Overfetching Data from External Sources

#### Problem

Fetching data from an API on every render or on every small state change downloads too much data.

```javascript
useEffect(() => {
  fetch("https://api.example.com/users")
    .then((res) => res.json())
    .then((data) => setUsers(data));
});
```

#### Internal Working and Error

The API is called after every render. This wastes network bandwidth and slows down the app. It can also cause rate limiting from the API provider.

#### Solution

Use a proper dependency array. Fetch only on mount or when a specific value changes.

```javascript
useEffect(() => {
  fetch("https://api.example.com/users")
    .then((res) => res.json())
    .then((data) => setUsers(data));
}, []);
```

````jsx
import React, { useState, useEffect } from "react";

export default function SearchBox() {
  const [searchResult, setSearchResult] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceTerm, setDebounceTerm] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceTerm(searchTerm);
      console.log(`Calling API to search: ${searchTerm}`);

      if (searchTerm.trim()) {
        setSearchResult(`Showing result for: "${searchTerm}"`);
      } else {
        setSearchResult("");
      }
    }, 500);

    return () => {
      console.log("timeout cleared");
      clearTimeout(timeout);
    };
  }, [searchTerm]);

  return (
    <div className="flex flex-col items-center mx-10 my-5 p-8 max-w-2xl w-full bg-white border border-gray-200 shadow-lg rounded-2xl">
      <h2 className="mb-6 pb-3 w-full font-bold text-center text-gray-800 text-xl border-b">
        Search Bar Optimization
      </h2>

      <div className="space-y-4 w-full">
        {/* Search Input */}
        <input
          type="text"
          id="search-text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-3 w-full text-gray-700 border border-gray-300 duration-200 transition focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        />
        {/* Result Display - with word wrap */}
        {searchResult ? (
          <div className="px-4 py-4 w-full text-center bg-blue-50 rounded-lg">
            <p className="break-words font-medium text-blue-700 text-lg">
              {searchResult}
            </p>
          </div>
        ) : (
          <div className="px-4 py-4 w-full text-center bg-gray-50 rounded-lg">
            <p className="text-gray-400 text-sm">
              {searchTerm ? "Searching..." : "Type to search..."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

## Debouncing

- Debouncing is a technique to delay the execution of a function until the user stops performing an action for a specified time.
- It prevents calling a function too many times in a short period.
- Example use cases are search inputs, window resize, and form validation.

## How Debouncing Works in the Above Example

- User types in the search input. The searchTerm state updates on every keystroke.
- The useEffect runs on every searchTerm change. A setTimeout is set for 500 milliseconds.
- If the user types again before 500 milliseconds pass, the cleanup function clears the previous timeout. A new timeout is set.
- The API call or state update only happens after the user stops typing for 500 milliseconds.

```javascript
useEffect(() => {
  const timeout = setTimeout(() => {
    setDebounceTerm(searchTerm)
    console.log(`Calling API to search: ${searchTerm}`)
  }, 500)

  return () => {
    clearTimeout(timeout)
  }
}, [searchTerm])
````

- This means typing "react" does not call the API five times. It calls the API once after the user pauses typing.

```

Create a component which has 3 phase

1.  loading data
2.  showing data
3.  showing error
```
