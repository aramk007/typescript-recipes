import axios from "axios";
import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import "./Home.scss";

//Interface
type recipeType = {
  name: string;
  rating: number;
  cuisine: string;
  difficulty: string;
  ingredients: [string];
  image: string;
  reviewCount: number;
  prepTimeMinutes: number;
};

export default function Home() {
  const [recipes, setRecipes] = useState<recipeType[]>([]);
  const [filterRecipes, setFilterRecipes] = useState();
  const [difficulty, setDifficulty] = useState("");

  const getRecipes = () => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        console.log(res.data.recipes);
        setRecipes(res.data.recipes);
        setFilterRecipes(res.data.recipes);
        recipes.map(() => {
          if (res.data.recipes.difficulty === "Easy") {
            setDifficulty(res.data.recipes.difficulty && res.data.recipes.name);
          }
          console.log(difficulty);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="recipeWrapper">
      {recipes.map((recipe, index) => {
        return (
          <>
            <div className="recipeContainer" key={index}>
              <img src={recipe.image} alt="" />
              <h1>{recipe.name}</h1>
              <div className="reviewsContainer">
                <ReactStars
                  edit={false}
                  size={30}
                  half={true}
                  value={recipe.rating}
                />
                <p>({recipe.reviewCount} Reviews)</p>
              </div>
              <div className="detailsContainer">
                <p>Prep Time: {recipe.prepTimeMinutes} Minutes</p>
                <p>
                  Difficulty:
                  <span
                    className={
                      recipe.difficulty === "Easy"
                        ? "easy"
                        : recipe.difficulty === "Medium"
                        ? "medium"
                        : recipe.difficulty === "Hard"
                        ? "hard"
                        : ""
                    }
                  >
                    {recipe.difficulty}
                  </span>
                </p>
                {/* <p>Tags: {recipe.tags}</p> */}
              </div>
              <button>More details</button>
            </div>
          </>
        );
      })}
    </div>
  );
}
