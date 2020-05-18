import React from "react";

import { RandomMeal } from "./components";

function App() {
  return (
    <div className='App'>
      <section className='container'>
        <h2>Featured Meals</h2>
        <RandomMeal />
      </section>
    </div>
  );
}

export default App;
