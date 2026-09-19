import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./lib/AuthContext.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Regions from "./pages/Regions.jsx";
import Products from "./pages/Products.jsx";
import Showroom from "./pages/Showroom.jsx";
import Blog from "./pages/Blog.jsx";
import Partners from "./pages/Partners.jsx";
import Faq from "./pages/Faq.jsx";
import Contact from "./pages/Contact.jsx";
import Account from "./pages/Account.jsx";
import NotFound from "./pages/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Home />} />
            <Route path="ve-chung-toi" element={<About />} />
            <Route path="vung-trong" element={<Regions />} />
            <Route path="san-pham" element={<Products />} />
            <Route path="showroom" element={<Showroom />} />
            <Route path="blog" element={<Blog />} />
            <Route path="doi-tac" element={<Partners />} />
            <Route path="faq" element={<Faq />} />
            <Route path="lien-he" element={<Contact />} />
            <Route path="tai-khoan" element={<Account />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
);
