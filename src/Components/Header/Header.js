import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../State/Search/searchSlice";
import "./Header.scss";
export default function Header() {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState("");
    const handleInputChange = (value) => {
        setSearchInput(value);
        dispatch(setSearchValue(value));
        console.log(value);
    };
    return (_jsx("div", { className: "header", children: _jsx("input", { type: "search", placeholder: "Search...", value: searchInput, onChange: (e) => handleInputChange(e.target.value) }) }));
}
