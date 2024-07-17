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
  recipeName: string;
  instruction: [string];
  ingredients: [string];
  image: string;
  prepTime: number;
  calories: number;
  rating: number;
  difficulty: string;
  _id: string;
};

export default function Home() {
  const [recipes, setRecipes] = useState<recipeType[]>([]);
  const searchValue = useSelector(selectSearchValue);

  const navigate = useNavigate();

  const handleClick = (_id: string, name: string) => {
    navigate(`/details?_id=${_id}&name=${encodeURIComponent(name)}`);
  };

  const handleEditRecipe = (id: string) => {
    navigate(`/editrecipe/${id}`);
    console.log(id);
  };

  const getRecipes = () => {
    axios
      .get("http://localhost:5500/api/recipes/")
      .then((res) => {
        console.log(res.data);
        setRecipes(res.data);
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
    recipe.recipeName.toLowerCase().includes(searchValue.toLowerCase())
  );

  const reviewCount = () => {
    return Math.floor(Math.random() * 100);
  };

  return (
    <>
      <Header />
      <div className="recipeWrapper">
        {filteredRecipes.map((recipe, index) => (
          <div className="recipeContainer" key={index}>
            <img src={recipe.image} alt="" />
            <h1>{recipe.recipeName}</h1>
            <div className="reviewsContainer">
              <ReactStars
                edit={false}
                size={30}
                half={true}
                value={recipe.rating}
              />
              <p>({reviewCount()} Reviews)</p>
            </div>
            <div className="detailsContainer">
              <p>Prep Time: {recipe.prepTime} Minutes</p>
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
            </div>
            <button onClick={() => handleClick(recipe._id, recipe.recipeName)}>
              More details
            </button>

            <br />
            <button onClick={() => handleEditRecipe(recipe._id)}>EDIT</button>
          </div>
        ))}
      </div>
    </>
  );
}
