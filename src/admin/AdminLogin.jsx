import { useState } from "react";
import { useAdminAuth } from "./AdminAuth";

export default function AdminLogin() {
  const { signIn } = useAdminAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const { error: err } = await signIn(email, password);
    if (err) {
      setError(
        err.message === "Invalid login credentials"
          ? "Email hoặc mật khẩu không đúng."
          : err.message,
      );
    }
    setBusy(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-coffee-dark px-6">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <img src="/logo.png" alt="DIEN3EAN COFFEE" className="mx-auto h-20 w-auto" />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-rust-light">
            Trang quản trị
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-2xl bg-cream p-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-ink">Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-ink/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-rust"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-ink">Mật khẩu</label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-ink/15 bg-white px-3 py-2.5 text-sm outline-none focus:border-rust"
            />
          </div>

          {error && <p className="rounded-lg bg-rust/10 px-3 py-2 text-sm text-rust-dark">{error}</p>}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-rust px-4 py-2.5 text-sm font-semibold text-cream hover:bg-rust-dark disabled:opacity-50"
          >
            {busy ? "Đang đăng nhập..." : "Đăng nhập"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-cream/40">
          Chỉ dành cho quản trị viên của DIEN3EAN COFFEE
        </p>
      </div>
    </div>
  );
}
