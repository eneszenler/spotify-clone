import {useMatch} from "react-router-dom";
import Auth from "./Navbar/Auth";
import Navigation from "./Navbar/Navigation";

const Navbar = () => {
  const searchRoute = useMatch("/search");
  const collectionRoute = useMatch("/collection");

  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8">
      <Navigation />
      {searchRoute && <h1>Search Kısmı</h1>}
      {collectionRoute && <h1>collection Kısmı</h1>}
      <Auth />
    </nav>
  );
};

export default Navbar;
