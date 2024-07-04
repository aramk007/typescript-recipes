import { useLocation } from "react-router-dom";

function useQuery() {
  //Here I implimented the URLSearchParams interface to work with
  //query strings in URLs, we can parse, manipulate and generate strings easily.
  return new URLSearchParams(useLocation().search);
}

export default function Details() {
  const query = useQuery();
  const id = query.get("id");
  const name = query.get("name");
  const cuisine = query.get("cuisine");

  return (
    <div>
      <h1>Details Page</h1>
      <p>Recipe ID: {id}</p>
      <p>Recipe Name: {name}</p>
      <p>Cuisine: {cuisine}</p>
    </div>
  );
}
