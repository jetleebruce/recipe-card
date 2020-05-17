import React, { useState, useEffect } from "react";

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

const RandomMeal = () => {
  const [meal, setMeal] = useState(undefined);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        setMeal(res.meals[0]);
      });
  }, []);

  if (!meal) return null;

  return (
    <div>
      <h1 style={{ height: "18px" }}>{meal.strMeal}</h1>
    </div>
  );
};

export default RandomMeal;