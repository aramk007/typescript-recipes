import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../State/Search/searchSlice";
import "./Header.scss";

export default function Header() {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState<string>("");

  const handleInputChange = (value: string) => {
    setSearchInput(value);
    dispatch(setSearchValue(value));
    console.log(value);
  };

  return (
    <div className="header">
      <input
        type="search"
        placeholder="Search..."
        value={searchInput}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
}
