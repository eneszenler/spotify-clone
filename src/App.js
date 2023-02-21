import Sidebar from "components/Sidebar";
import Bottombar from "components/Bottombar";
import Content from "components/Content";

import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Bottombar />
    </BrowserRouter>
  ); 
};

export default App;
