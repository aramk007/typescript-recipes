import { useState } from "react";
import "./Header.scss";
export default function Header() {
  const [searchInput, setSearchInput] = useState<string>("");

  const handleInputChange = (value: string) => {
    setSearchInput(value);
  };
  return (
    <>
      <div>
        <input
          type="search"
          name=""
          id=""
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Search..."
        />
      </div>
    </>
  );
}
