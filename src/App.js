import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </div>
  );
}

export default App;
