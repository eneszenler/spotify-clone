import {Icon} from "Icons";
import React from "react";
import {NavLink} from "react-router-dom";

const DownloadApp = () => {
  return (
    <NavLink
      to="/"
      className="h-10 flex flex-shrink-0 text-sm font-semibold text-link hover:text-white items-center px-6 gap-x-4"
    >
      <span>
        <Icon name="download" size={20}/>
      </span>
      Uygulamayı Yükle
    </NavLink>
  );
};

export default DownloadApp;
