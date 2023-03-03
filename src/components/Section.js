import React from "react";
import SongItem from "./SongItem";
import Title from "./Title";

const Section = ({title, more = false, data}) => {
  return (
    <section>
      <Title title={title} more={more} />
      <div className="grid grid-cols-5 gap-x-6">
        {data && data.map((item) => <SongItem item={item} key={item.id} />)}
      </div>
    </section>
  );
};

export default Section;
