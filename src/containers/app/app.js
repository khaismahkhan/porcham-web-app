import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Header from "../main/header/header";
import { ThemeProvider } from "@mui/material";
import { porchamTheme } from "../../containers/main/material.theme/porcham.theme/porcham.material.theme";
import Footer from "../main/footer/footer";
import ComingSoon from "../pages/coming.soon/coming.soon";

function App() {
  return (
    <ThemeProvider theme={porchamTheme}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
