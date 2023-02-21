import Navbar from "components/Navbar";

import {Routes, Route} from "react-router-dom";
import Collection from "views/Collection";
import Home from "views/Home";
import Search from "views/Search";

const Content = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </main>
  );
};

export default Content;
