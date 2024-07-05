import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Details from "../Components/Details/Details";

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
      </Routes>
    </BrowserRouter>
  );
}
