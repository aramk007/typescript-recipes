import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import "./Home.scss";
import Header from "../Header/Header";
import { useSelector } from "react-redux";
import { selectSearchValue } from "../../State/Search/searchSlice";
import { useNavigate } from "react-router-dom";
export default function Home() {
    const [recipes, setRecipes] = useState([]);
    const searchValue = useSelector(selectSearchValue);
    const navigate = useNavigate();
    const handleClick = (id, name, cuisine) => {
        navigate(`/details?id=${id}&name=${encodeURIComponent(name)}&cuisine=${encodeURIComponent(cuisine)}`);
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
    const filteredRecipes = recipes.filter((recipe) => recipe.name.toLowerCase().includes(searchValue.toLowerCase()));
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("div", { className: "recipeWrapper", children: filteredRecipes.map((recipe, index) => (_jsxs("div", { className: "recipeContainer", children: [_jsx("img", { src: recipe.image, alt: "" }), _jsx("h1", { children: recipe.name }), _jsxs("div", { className: "reviewsContainer", children: [_jsx(ReactStars, { edit: false, size: 30, half: true, value: recipe.rating }), _jsxs("p", { children: ["(", recipe.reviewCount, " Reviews)"] })] }), _jsxs("div", { className: "detailsContainer", children: [_jsxs("p", { children: ["Prep Time: ", recipe.prepTimeMinutes, " Minutes"] }), _jsxs("p", { children: ["Difficulty:", _jsx("span", { className: recipe.difficulty === "Easy"
                                                ? "easy"
                                                : recipe.difficulty === "Medium"
                                                    ? "medium"
                                                    : recipe.difficulty === "Hard"
                                                        ? "hard"
                                                        : "", children: recipe.difficulty })] })] }), _jsx("button", { onClick: () => handleClick(recipe.id, recipe.name, recipe.cuisine), children: "More details" }), _jsx("br", {})] }, index))) })] }));
}
