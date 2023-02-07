
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Details from "./components/Details";
import HomeScreen from "./screen/HomeScreen";

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScreen/>} />
            <Route path="/details" exact element={<Details/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
