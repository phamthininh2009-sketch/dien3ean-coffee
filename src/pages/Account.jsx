import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import { img } from "../data/images";
import { useAuth } from "../lib/AuthContext";

export default function Account() {
  const { user, signIn, signUp, signOut } = useAuth();
  const navigate = useNavigate();
  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setNotice("");
    setSubmitting(true);
    try {
      if (mode === "signin") {
        const { error: err } = await signIn(email, password);
        if (err) throw err;
        navigate("/");
      } else {
        const { error: err } = await signUp(email, password);
        if (err) throw err;
        setNotice("Đăng ký thành công! Vui lòng kiểm tra email để xác nhận tài khoản.");
      }
    } catch (err) {
      setError(err.message || "Có lỗi xảy ra, vui lòng thử lại.");
    } finally {
      setSubmitting(false);
    }
  }

  if (user) {
    return (
      <>
        <PageHero
          label="Tài khoản"
          title="Xin chào"
          desc={user.email}
          image={img("baristaLatteHeart", { w: 1920 })}
        />
        <section className="bg-cream py-24">
          <div className="container-page max-w-md">
            <p className="text-sm text-ink-soft">Bạn đã đăng nhập với email:</p>
            <p className="mt-1 font-medium text-ink">{user.email}</p>
            <button
              onClick={() => signOut()}
              className="mt-8 inline-flex items-center justify-center rounded-full border border-ink/20 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink hover:border-ink hover:bg-ink hover:text-cream"
            >
              Đăng xuất
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        label="Tài khoản"
        title="Đăng nhập / Đăng ký"
        desc="Tạo tài khoản để theo dõi đơn hàng, ưu đãi và thông tin dành riêng cho khách hàng thân thiết của Dien3ean."
        image={img("baristaLatteHeart", { w: 1920 })}
      />

      <section className="bg-cream py-24">
        <div className="container-page max-w-md">
          <SectionLabel>{mode === "signin" ? "Đăng nhập" : "Đăng ký"}</SectionLabel>

          <div className="mb-8 flex gap-2 rounded-full bg-cream-soft p-1">
            <button
              onClick={() => setMode("signin")}
              className={`flex-1 rounded-full py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
                mode === "signin" ? "bg-rust text-cream" : "text-ink-soft"
              }`}
            >
              Đăng nhập
            </button>
            <button
              onClick={() => setMode("signup")}
              className={`flex-1 rounded-full py-2.5 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
                mode === "signup" ? "bg-rust text-cream" : "text-ink-soft"
              }`}
            >
              Đăng ký
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-rust"
                placeholder="ban@email.com"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">Mật khẩu</label>
              <input
                required
                minLength={6}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-rust"
                placeholder="Tối thiểu 6 ký tự"
              />
            </div>

            {error && <p className="text-sm text-rust-dark">{error}</p>}
            {notice && <p className="text-sm text-ink-soft">{notice}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-rust px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-cream hover:bg-rust-dark disabled:opacity-60"
            >
              {submitting ? "Đang xử lý..." : mode === "signin" ? "Đăng nhập" : "Tạo tài khoản"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
