import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
    const [recipe, recipeDetails] = useState({
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
    return (_jsxs("div", { className: "details-wrapper", children: [_jsx("h1", { children: recipe.name }), _jsxs("div", { className: "instructions-wrapper", children: [_jsx("div", { children: _jsx("img", { src: recipe.image, alt: "recipe" }) }), _jsxs("div", { children: [_jsxs("h2", { children: [_jsx(FontAwesomeIcon, { icon: faList }), " What will you need?"] }), _jsxs("p", { children: [_jsx(FontAwesomeIcon, { icon: faUtensils }), " Calories:", " ", recipe.caloriesPerServing, " cals"] }), _jsx("ul", { children: recipe.ingredients.map((item, index) => {
                                    return _jsx("li", { children: item }, index);
                                }) })] }), _jsxs("div", { children: [_jsxs("h2", { children: [_jsx(FontAwesomeIcon, { icon: faClock }), " Instructions"] }), _jsxs("p", { children: ["Prep Time: ", recipe.prepTimeMinutes, " mins"] }), _jsx("ul", { children: recipe.instructions.map((item, index) => {
                                    return _jsx("li", { children: item }, index);
                                }) })] })] })] }));
}
