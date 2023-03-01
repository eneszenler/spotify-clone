import {Icon} from "Icons";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { setSidebar } from "stores/player";

const SidebarCover = () => {
  const dispatch = useDispatch();
  const {current} = useSelector((state) => state.player);

  return (
    <div className="pt-[100%] bg-white relative group">
      <img src={current?.image_url} className="w-full h-full absolute top-0 left-0 object-cover" />
      <button
        onClick={() => dispatch(setSidebar(false))}
        className="w-6 h-6 bg-black opacity-80 group-hover:flex hover:opacity-100 hover:scale-[1.06] justify-center items-center rounded-full absolute top-2 right-2 -rotate-90 hidden"
      >
        <Icon name="arrowLeft" size={16} />
      </button>
    </div>
  );
};

export default SidebarCover;
