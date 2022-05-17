import react from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsScreen from "./pages/DetailsScreen/DetailsScreen";
import Search from "./pages/Search/Search";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
            </div>
          }
        />
         <Route
          path="/details/:id"
          element={
            <div>
              <DetailsScreen />
            </div>
          } />
          <Route
          path="/search/:query"
          element={
            <div>
              <Search />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
