import { useState } from "react";
import "./AddRecipes.scss";

export default function Addrecipes() {
  return (
    <div className="add-recipe-wrapper">
      <h2>Add a New Recipe</h2>
      <form>
        <div className="form-items">
          <label htmlFor="recipeName">Recipe Name</label>
          <input
            type="text"
            id="recipeName"
            name="recipeName"
            placeholder="Enter recipe name"
            required
          />
        </div>
        <div className="form-items">
          <label htmlFor="prepTime">Preparation Time</label>
          <input
            type="number"
            id="prepTime"
            name="prepTime"
            placeholder="Enter Prep Time Minutes"
            required
          />
        </div>
        <div className="form-items">
          <label htmlFor="calories">Calories</label>
          <input
            type="number"
            id="calories"
            name="calories"
            placeholder="Enter calories"
            required
          />
        </div>
        <div className="form-items">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Describe the recipe"
            required
          />
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
