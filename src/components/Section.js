import {Icon} from "Icons";
import React from "react";
import {Link} from "react-router-dom";
import SongItem from "./SongItem";

const Section = ({title, more = false, data}) => {
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
        {data && data.map((item) => <SongItem item={item} key={item.id} />)}
      </div>
    </section>
  );
};

export default Section;
