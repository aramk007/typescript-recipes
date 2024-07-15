import { useEffect, useState, useRef } from "react";
import "./AddRecipes.scss";
import { uploadAwsFile } from "../../Config/aws.js";
import ReactStars from "react-stars";
import Select from "react-select";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function Addrecipes() {
  const [instruction, setInstruction] = useState([""]);
  const [ingredients, setIngrdients] = useState([""]);
  const [image, setImage] = useState<string | ArrayBuffer>("");
  const [rating, setRating] = useState<number>();
  // difficulty
  const [selectedOption, setSelectedOption] = useState(null);

  let recipeNameRef = useRef<HTMLInputElement>();
  let prepTimeRef = useRef<HTMLInputElement>();
  let caloriesRef = useRef<HTMLInputElement>();
  let descriptionRef = useRef<HTMLTextAreaElement>();

  const options = [
    { value: "Easy", label: "Easy" },
    { value: "Not So Easy", label: "Not So Easy" },
    { value: "Hard", label: "Hard" },
  ];
  const navigate = useNavigate();
  const postData = (e) => {
    e.preventDefault();
    const payload = {
      recipeName: recipeNameRef.current.value,
      prepTime: prepTimeRef.current.value,
      calories: caloriesRef.current.value,
      description: descriptionRef.current.value,
      instructions: instruction,
      ingredients,
      image,
      rating,
      difficulty: selectedOption.value,
    };
    axios
      .post(`http://localhost:5500/api/recipes/`, payload)
      .then(() => {
        alert("yay it worked");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddMore = () => {
    setInstruction([...instruction, ""]);
  };
  const handleRemovePoop = (poopIndex: number) => {
    console.log(poopIndex);
    const newArr = ingredients.filter((ingItem, index) => {
      return index !== poopIndex;
    });

    setIngrdients([...newArr]);
  };
  const handleAddIngredients = () => {
    setIngrdients([...ingredients, ""]);
  };

  const handleRemoveItems = (itemIndex: number) => {
    const filterItems = instruction.filter((element, index) => {
      return index !== itemIndex;
    });

    setInstruction([...filterItems]);
  };

  const handleInputChange = (e: string, index: number) => {
    let data = [...instruction];
    data[index] = e;
    console.log(data);

    setInstruction([...data]);
  };

  const handleUpdateIngredients = (e: string, indexIng: number) => {
    const updateArray = [...ingredients];
    updateArray[indexIng] = e;
    setIngrdients([...updateArray]);
    console.log(updateArray);
  };

  function readFile(e: any) {
    let files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      (function (file) {
        var reader = new FileReader();
        reader.onload = () => {
          setImage(reader.result);
          console.log(reader.result);
        };
        reader.readAsDataURL(file);
      })(files[i]);
    }
  }

  return (
    <div className="add-recipe-wrapper">
      <h2>Add a New Recipe</h2>
      <form onSubmit={(e) => postData(e)}>
        <div className="form-items">
          <label htmlFor="recipeName">Recipe Name</label>
          <input
            type="text"
            id="recipeName"
            name="recipeName"
            placeholder="Enter recipe name"
            ref={recipeNameRef}
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
            ref={prepTimeRef}
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
            ref={caloriesRef}
            required
          />
        </div>
        <div className="form-items">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Describe the recipe"
            ref={descriptionRef}
            required
          />
        </div>
        <div className="form-items">
          <label htmlFor="difficulty">Difficulty</label>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>

        <div className="stars">
          Review Recipe
          <ReactStars
            edit={true}
            count={5}
            color2={"#a76c28"}
            size={26}
            half={true}
            value={rating}
            onChange={(value) => setRating(value)}
          />
          <p>The rating is {rating || 0}</p>
        </div>
        <div className="addInstructions">
          {instruction.map((element, index) => {
            return (
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder={`Instruction # ${index + 1}`}
                  onChange={(e) => handleInputChange(e.target.value, index)}
                />

                {instruction.length > 1 && (
                  <button
                    onClick={() => handleRemoveItems(index)}
                    type="button"
                  >
                    Remove Me
                  </button>
                )}
              </div>
            );
          })}

          <button type="button" onClick={handleAddMore}>
            Add More
          </button>
        </div>
        <div className="addIngredients">
          {ingredients.map((element, index) => {
            console.log(element);

            return (
              <>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) =>
                      handleUpdateIngredients(e.target.value, index)
                    }
                    placeholder={`Ingredients# ${index + 1}`}
                  />
                  {ingredients.length > 1 && (
                    <button
                      onClick={() => handleRemovePoop(index)}
                      type="button"
                    >
                      Remove Poop
                    </button>
                  )}
                </div>
              </>
            );
          })}
          <button type="button" onClick={handleAddIngredients}>
            Add More Poop
          </button>
        </div>
        <div className="poopyImages">
          <input type="file" src="" alt="" onChange={(e) => readFile(e)} />
          {image && <img src={image} alt="imagePreview" />}
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
