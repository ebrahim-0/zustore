# **zustore (\***Global State Manager**\*\)**

A lightweight, flexible global state management library for React applications, built on top of ContextApi. This library provides an intuitive API for managing global state, dispatching actions, and keeping your application state organized.

---

## **Table of Contents**

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available Hooks](#available-hooks)
- [Global State Example](#global-state-example)
- [Custom Actions](#custom-actions)
- [License](#license)
- [Contact](#contact)

---

## **Features**

- 🌀 Simple global state management with ContextApi.
- ⚡ Dynamic action dispatching.
- 💾 Temporary state support for transient updates.
- 🔄 Reset and dirty state management.
- 🚫 **Add state without re-rendering**: Modify or add new state slices without triggering the updated value until you render it.

---

## **Installation**

Install the package via NPM or Yarn:

```bash
npm install zustore
# or
yarn add zustore
```

---

## **Usage**

### **Setup**

create the provider if you want to add a initial state or make a actions

### if you don’t need the initial state and make a actions don’t add the StateProvider

```tsx
"use client"; // don’t forget to add use clint if you are in a next.js

import { ReactNode } from "react";
import { CreateDispatchType, initial } from "zustore";

const initialState = {
  name: "Ibrahim",
  info: {
    age: 22,
  },
};

// Define the createDispatch function
const createDispatch: CreateDispatchType = (name, payload, tools) => {
  const { dispatch, addState, reset } = tools;

  // Action functions
  const setAge = () => {
    const age = payload.value;
    dispatch({ age }, "info"); // Example of using addState
  };

  const lang = () => {
    const { lang } = payload;
    addState({ lang }, "info2"); // Example of using addState
  };

  // Switch based on the function name
  switch (name) {
    case "setAge":
      return setAge();
    case "lang":
      return lang();
    default:
      console.log("No matching action for:", name);
      break;
  }
};

const StateProvider = initial(initialState, createDispatch);

const Root = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return <StateProvider>{children}</StateProvider>;
};

export default Root;
```

Then import the hooks and start managing your global state:

```tsx
import React from "react";
import { useDispatch, useSelector } from "zustore";

const App = () => {
  const { dispatch, dispatcher, addState } = useDispatch();

  // Accessing state
  const name = useSelector("info.name", "Default Name");
  const age = useSelector("info.age", 0);

  // or can get multiple
  const [name, age] = useSelector(
    ["info.name", "info.age"],
    ["Default Name", 0]
  );

  const updateAge = () => {
    dispatcher("setAge", { value: 22 }); // Dispatch an action to update age
    addState({ job: "front end" }); // this will add a value to state and  not be render until the first dispatch
    // update state
    dispatch({ name: "Ibrahim" }, "info");
    // or
    dispatch({ name: "Ibrahim" });
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <button onClick={updateAge}>Update Age</button>
    </div>
  );
};

export default App;
```

---

### **Available Hooks**

#### **`useDispatch`**

Provides access to dispatch and state-management methods.

```typescript
import { useDispatch } from "zustore";

const { dispatch, dispatcher, reset, dirty, addState } = useDispatch();
```

##### Methods:

- **`dispatch`**: Directly update or replace state.
- **`dispatcher(action, payload)`**: Dispatch an action using the predefined `createDispatch` logic.
- **`reset(keys)`**: Reset specific state slices to their initial values.
- **`dirty(keys)`**: Remove specific keys from the state.
- **`addState(newState, key?)`**: Add or update state slices dynamically.

#### **`useSelector`**

Access specific parts of the global state.

```typescript
import { useSelector } from "zustore";

const value = useSelector("key", "defaultValue");
```

- **`key`**: The state key to retrieve.
- **`defaultValue`**: Fallback value if the key does not exist.

---

### **Global State Example**

Customize your initial global state in `global-state.ts`:

```typescript
export const globalState = {
  info: {
    name: "John Doe",
    age: 25,
  },
  settings: {
    theme: "light",
    language: "en",
  },
};
```

---

### **Custom Actions**

Define actions in `createDispatch`:

```typescript
import { CreateDispatch } from "zustore";

const createDispatch = CreateDispatch(({ name, payload, tools }) => {
  const { dispatch, addState, state } = tools;

  const setAge = () => {
    const age = payload.value;
    dispatch({ age }, "info");
  };

  switch (name) {
    /*
      actions => return all actions that you logged
      when you call dispatcher("setAge", { value: 28 })
      (setAge) is the action
    */
    case "setAge":
      return setAge();
    case "lang":
      return lang();
    default:
      console.log("not found");
      break;
  }
});
```

Dispatch actions using `dispatcher`:

```typescript
import { useDispatch } from "zustore";
const { dispatcher } = useDispatch();
dispatcher("setAge", { value: 28 });
```

Reset the value to the initial value in global state `reset`:

```typescript
import { useDispatch } from "zustore";
const { reset } = useDispatch();
reset("key");
// or
reset(["key1", "key2"]);
```

Dirty the value in the state remove the a value in the state `dirty`:

```typescript
import { useDispatch } from "zustore";
const { dirty } = useDispatch();
dirty("key");
// or
dirty(["key1", "key2"]);
```

## **License**

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

# **Contact**

For any inquiries, feedback, or support, feel free to reach out to us through the following channels:

- 📧 **Email**: [ebrahimabdelrazik2002@gmail.com](mailto:ebrahimabdelrazik2002@gmail.com)
  <!-- - 🌐 **Website**: [https://zustore.io](https://zustore.io) -->
  <!-- - 🐦 **Twitter**: [@zustoreLib](https://twitter.com/zustoreLib) -->
- 💼 **LinkedIn**: [Ebrahim Abdelrazik](https://www.linkedin.com/in/ebrahim-abdelrazik2020)

We appreciate your interest in zustore and are happy to assist with any questions or issues you may have.
