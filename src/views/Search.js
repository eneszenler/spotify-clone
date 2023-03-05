import CategoryItem from "components/CategoryItem";
import Title from "components/Title";
import categories from "data/categories";

const Search = () => {
  const shuffle = (arr) => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  };

  return (
    <>
      <Title title="Hepsine göz at" />
      <div className="grid grid-cols-5 gap-6">
        {categories && shuffle(categories).map((item, index) => <CategoryItem category={item} key={index} />)}
      </div>
    </>
  );
};

export default Search;
