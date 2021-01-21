import React, { useState } from "react";
import data from "./data";
import List from "./components/List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="birthday">
      <h1>Birthday Reminder</h1>

      <List people={people} />
      <button onClick={() => setPeople([])}>Clear All</button>
    </div>
  );
}

export default App;
