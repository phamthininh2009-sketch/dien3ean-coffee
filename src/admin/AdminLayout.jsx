import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useAdminAuth } from "./AdminAuth";
import AdminLogin from "./AdminLogin";

const nav = [
  { to: "/admin", label: "Tổng quan", end: true },
  { to: "/admin/noi-dung", label: "Nội dung chung" },
  { to: "/admin/vung-trong", label: "Vùng trồng" },
  { to: "/admin/san-pham", label: "Sản phẩm" },
  { to: "/admin/danh-muc-san-pham", label: "Danh mục sản phẩm" },
  { to: "/admin/blog", label: "Bài viết blog" },
  { to: "/admin/danh-muc-blog", label: "Danh mục blog" },
  { to: "/admin/showroom", label: "Showroom" },
  { to: "/admin/tin-nhan", label: "Tin nhắn liên hệ" },
];

export default function AdminLayout() {
  const { user, loading, signOut } = useAdminAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-coffee-dark text-sm text-cream/60">
        Đang tải...
      </div>
    );
  }

  if (!user) return <AdminLogin />;

  const linkClass = ({ isActive }) =>
    `block rounded-lg px-3 py-2.5 text-sm transition-colors ${
      isActive ? "bg-rust text-cream" : "text-cream/70 hover:bg-cream/10 hover:text-cream"
    }`;

  return (
    <div className="min-h-screen bg-cream-soft/40">
      <header className="flex items-center justify-between gap-4 bg-coffee-dark px-5 py-3 lg:hidden">
        <img src="/logo-mark.png" alt="" className="h-9 w-auto" />
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="rounded-lg border border-cream/20 px-3 py-1.5 text-sm text-cream"
        >
          {menuOpen ? "Đóng" : "Menu"}
        </button>
      </header>

      <div className="lg:flex">
        <aside
          className={`bg-coffee-dark px-4 py-6 lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:shrink-0 ${
            menuOpen ? "block" : "hidden lg:block"
          }`}
        >
          <div className="hidden px-2 lg:block">
            <img src="/logo.png" alt="DIEN3EAN COFFEE" className="h-14 w-auto" />
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-rust-light">
              Trang quản trị
            </p>
          </div>

          <nav className="mt-6 space-y-1" onClick={() => setMenuOpen(false)}>
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-8 border-t border-cream/10 pt-5">
            <p className="px-3 text-xs text-cream/40">Đăng nhập bằng</p>
            <p className="truncate px-3 text-sm text-cream/70">{user.email}</p>
            <Link
              to="/"
              className="mt-4 block rounded-lg px-3 py-2 text-sm text-cream/70 hover:bg-cream/10 hover:text-cream"
            >
              Xem website
            </Link>
            <button
              onClick={signOut}
              className="mt-1 block w-full rounded-lg px-3 py-2 text-left text-sm text-cream/70 hover:bg-cream/10 hover:text-cream"
            >
              Đăng xuất
            </button>
          </div>
        </aside>

        <main className="flex-1 px-5 py-8 lg:px-10 lg:py-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
