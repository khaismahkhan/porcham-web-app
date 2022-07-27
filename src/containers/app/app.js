import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Header from "../main/header/header";
import { ThemeProvider } from "@mui/material";
import { porchamTheme } from "../../containers/main/material.theme/porcham.theme/porcham.material.theme";

function App() {
  return (
    <ThemeProvider theme={porchamTheme}>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;