const CategoryItem = ({category}) => {
  return (
    <div
      style={{"--color": category?.color}}
      className="bg-[var(--color)] rounded-md before:pt-[100%] before:block relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <h3 className="p-4 text-2xl tracking-tighter font-semibold">{category?.title}</h3>
      </div>
      <img
        src={category?.cover}
        alt=""
        className="shadow-spotify absolute bottom-0 right-0 rotate-[25deg] w-[6.25rem] h-[6.25rem] translate-x-[18%] translate-y-[5%]"
      />
    </div>
  );
};

export default CategoryItem;
