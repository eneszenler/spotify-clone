import CategoryItem from "components/CategoryItem";
import Title from "components/Title";
import categories from "data/categories";

const Search = () => {
  return (
    <>
      <Title title="Hepsine göz at" />
      <div className="grid grid-cols-5 gap-6">
        {categories && categories.map((item, index) => <CategoryItem category={item} key={index} />)}
      </div>
    </>
  );
};

export default Search;
