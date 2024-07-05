import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { detailsType } from "../../Types/DetailsTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faClock, faList } from "@fortawesome/free-solid-svg-icons";
import "./Details.scss";

function useQuery() {
  //Here I implemented the URLSearchParams interface to work with
  //query strings in URLs, we can parse, manipulate and generate strings easily.
  return new URLSearchParams(useLocation().search);
}

export default function Details() {
  const query = useQuery();
  const id = query.get("id");

  const [recipe, recipeDetails] = useState<detailsType>({
    name: "",
    image: "",
    caloriesPerServing: 0,
    cuisine: "",
    ingredients: [""],
    mealType: [""],
    instructions: [""],
    prepTimeMinutes: 0,
  });

  const getRecipe = () => {
    axios
      .get("https://dummyjson.com/recipes/" + id)
      .then((res) => {
        console.log(res);
        recipeDetails(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getRecipe();
  }, [id]); // Added id to dependency array

  return (
    <div className="details-wrapper">
      <h1>{recipe.name}</h1>

      <div className="instructions-wrapper">
        <div>
          <img src={recipe.image} alt="recipe" />
        </div>
        <div>
          <h2>
            <FontAwesomeIcon icon={faList} /> What will you need?
          </h2>
          <p>
            <FontAwesomeIcon icon={faUtensils} /> Calories:{" "}
            {recipe.caloriesPerServing} cals
          </p>
          <ul>
            {recipe.ingredients.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>

        <div>
          <h2>
            <FontAwesomeIcon icon={faClock} /> Instructions
          </h2>
          <p>Prep Time: {recipe.prepTimeMinutes} mins</p>
          <ul>
            {recipe.instructions.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
