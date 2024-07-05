import axios from "axios";
import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import "./Home.scss";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { selectSearchValue } from "../../State/Search/searchSlice";
import { useNavigate } from "react-router-dom";

// Interface
type recipeType = {
  name: string;
  rating: number;
  cuisine: string;
  difficulty: string;
  ingredients: [string];
  image: string;
  reviewCount: number;
  prepTimeMinutes: number;
  id: number;
};

export default function Home() {
  const [recipes, setRecipes] = useState<recipeType[]>([]);
  const searchValue = useSelector(selectSearchValue);

  const navigate = useNavigate();

  const handleClick = (id: number, name: string, cuisine: string) => {
    navigate(
      `/details?id=${id}&name=${encodeURIComponent(
        name
      )}&cuisine=${encodeURIComponent(cuisine)}`
    );
  };

  const getRecipes = () => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => {
        console.log(res.data.recipes);
        setRecipes(res.data.recipes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  // Filter recipes based on the search value
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="recipeWrapper">
        {filteredRecipes.map((recipe, index) => (
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
            <button
              onClick={() =>
                handleClick(recipe.id, recipe.name, recipe.cuisine)
              }
            >
              More details
            </button>

            <br />
          </div>
        ))}
      </div>
    </>
  );
}
