import React, { useState } from "react";
import './NavBar.css';
const NavBar = ({onSearch}) =>{
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    }

    return(
        <nav className="nav-bar">
            <input
                type="text"
                className="search-bar"
                placeholder="serach here"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch} className="search-btn">Search</button>

        </nav>
    );
};

export default NavBar;