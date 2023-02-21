import React from "react";
import {NavLink} from "react-router-dom";

const Playlists = () => {
  return (
    <nav className="mx-6 mt-2 py-2 flex-aut overflow-auto border-t border-white border-opacity-20">
      <ul>
        {new Array(40).fill(
          <li>
            <NavLink to="/" className="text-s text-link hover:text-white flex h-8 items-center">
              Arkada calsin
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Playlists;
