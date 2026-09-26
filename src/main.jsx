import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Regions from "./pages/Regions.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Showroom from "./pages/Showroom.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import Partners from "./pages/Partners.jsx";
import Faq from "./pages/Faq.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import { SiteContentProvider } from "./lib/SiteContent.jsx";
import { AdminAuthProvider } from "./admin/AdminAuth.jsx";
import AdminLayout from "./admin/AdminLayout.jsx";
import Dashboard from "./admin/pages/Dashboard.jsx";
import ContentAdmin from "./admin/pages/ContentAdmin.jsx";
import RegionsAdmin from "./admin/pages/RegionsAdmin.jsx";
import ProductsAdmin from "./admin/pages/ProductsAdmin.jsx";
import ProductCategoriesAdmin from "./admin/pages/ProductCategoriesAdmin.jsx";
import BlogPostsAdmin from "./admin/pages/BlogPostsAdmin.jsx";
import BlogCategoriesAdmin from "./admin/pages/BlogCategoriesAdmin.jsx";
import LocationsAdmin from "./admin/pages/LocationsAdmin.jsx";
import MessagesAdmin from "./admin/pages/MessagesAdmin.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AdminAuthProvider>
        <SiteContentProvider>
          <Routes>
            <Route element={<App />}>
              <Route index element={<Home />} />
              <Route path="ve-chung-toi" element={<About />} />
              <Route path="vung-trong" element={<Regions />} />
              <Route path="san-pham" element={<Products />} />
              <Route path="san-pham/:slug" element={<ProductDetail />} />
              <Route path="showroom" element={<Showroom />} />
              <Route path="blog" element={<Blog />} />
              <Route path="blog/:slug" element={<BlogDetail />} />
              <Route path="doi-tac" element={<Partners />} />
              <Route path="faq" element={<Faq />} />
              <Route path="lien-he" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="noi-dung" element={<ContentAdmin />} />
              <Route path="vung-trong" element={<RegionsAdmin />} />
              <Route path="san-pham" element={<ProductsAdmin />} />
              <Route
                path="danh-muc-san-pham"
                element={<ProductCategoriesAdmin />}
              />
              <Route path="blog" element={<BlogPostsAdmin />} />
              <Route path="danh-muc-blog" element={<BlogCategoriesAdmin />} />
              <Route path="showroom" element={<LocationsAdmin />} />
              <Route path="tin-nhan" element={<MessagesAdmin />} />
            </Route>
          </Routes>
        </SiteContentProvider>
      </AdminAuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
