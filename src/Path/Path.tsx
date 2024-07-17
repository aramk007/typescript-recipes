import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Details from "../Components/Details/Details";
import Addrecipes from "../Components/AddRecipes/Addrecipes";
import EditRecipes from "../Components/EditRecipes/EditRecipes";

export default function Path() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Home />
            </>
          }
          path="/"
        />
        <Route element={<Details />} path="/details" />
        <Route element={<Addrecipes />} path="/addrecipes" />
        <Route element={<EditRecipes />} path="/editrecipe/:id" />
      </Routes>
    </BrowserRouter>
  );
}
