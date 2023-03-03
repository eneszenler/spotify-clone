import {Icon} from "Icons";
import React from "react";

const Search = () => {
  return (
    <div className="mr-auto ml-4 relative">
      <label htmlFor="search-input" className="text-black w-12 h-10 flex items-center justify-center absolute top-0 left-0">
        <Icon name="search" size={24} />
      </label>
      <input
        id="search-input"
        autoComplete="off"
        type="text"
        className="h-10 pl-12 bg-white outline-none text-black rounded-3xl text-sm w-[22.75rem] max-w-full"
        placeholder="Ne dinlemek istiyorsun?"
      />
    </div>
  );
};

export default Search;
