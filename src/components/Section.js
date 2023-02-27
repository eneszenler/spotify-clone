import {Icon} from "Icons";
import React from "react";
import {Link, NavLink} from "react-router-dom";

const Section = ({title, more = false, data}) => {
  const imageStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";
      case "podcast":
        return "rounded-xl";
      default:
        return "rounded";
    }
  };
  return (
    <section>
      <header className="flex items-center justify-between mb-4">
        <Link to={more ?? "/"}>
          <h3 className="text-2xl text-white font-semibold tracking-tight hover:underline">{title}</h3>
        </Link>
        <Link
          to={more ?? "/"}
          className="font-semibold text-xs text-link uppercase hover:underline tracking-wider"
        >
          SEE ALL
        </Link>
      </header>
      <div className="grid grid-cols-5 gap-x-6">
        {data &&
          data.map((item) => (
            <NavLink key={item?.id} to={"/"} className={"bg-footer rounded p-4 hover:bg-active group"}>
              <div className="pt-[100%] relative mb-4">
                <img
                  src={item?.image_url}
                  alt={item?.title}
                  className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`}
                />
                <button className="w-12 h-12 rounded-full group-hover:flex group-active:flex bg-primary absolute bottom-2 right-2 hidden justify-center items-center">
                  <Icon name="play" size={22} />
                </button>
              </div>
              <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
                {item?.title}
              </h6>
              <p className="text-link line-clamp-2 text-sm mt-1">{item?.description}</p>
            </NavLink>
          ))}
      </div>
    </section>
  );
};

export default Section;
