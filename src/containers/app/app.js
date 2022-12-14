import "./app.scss";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Header from "../main/header/header";
import { ThemeProvider } from "@mui/material";
import { porchamTheme } from "../../containers/main/material.theme/porcham.theme/porcham.material.theme";
import Footer from "../main/footer/footer";
import ComingSoon from "../pages/coming.soon/coming.soon";
import ContactUs from "../pages/contact.us/contact.us";

function App() {
  return (
    <ThemeProvider theme={porchamTheme}>
      <Header />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </div>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
