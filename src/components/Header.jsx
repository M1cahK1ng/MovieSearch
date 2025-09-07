import React /* useEffect, useState */ from "react";
import SearchMovies from "./SearchMovies";

const Header = () => {
  

  return (
    <header className="MovieHeader">
      <div className="logo">
        <h2>Serenity</h2>
      </div>

      <div className="navbar">
        <nav>
          <ul>
            <li>
              <a href={`#`} target="_blank">Get Your Api</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
