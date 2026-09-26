import { useRef, useState } from "react";
import { uploadImage } from "../lib/api";

export default function ImageField({ value, onChange, label }) {
  const inputRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setError("");
    try {
      const url = await uploadImage(file);
      onChange(url);
    } catch (err) {
      setError(err.message || "Tải ảnh thất bại");
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div>
      {label && <label className="mb-2 block text-sm font-medium text-ink">{label}</label>}
      <div className="flex flex-wrap items-start gap-4">
        <div className="h-28 w-28 shrink-0 overflow-hidden rounded-lg border border-ink/15 bg-cream-soft">
          {value ? (
            <img src={value} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center text-xs text-ink-soft">Chưa có ảnh</div>
          )}
        </div>
        <div className="min-w-[220px] flex-1">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={busy}
              onClick={() => inputRef.current?.click()}
              className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-cream hover:bg-ink/85 disabled:opacity-50"
            >
              {busy ? "Đang tải..." : "Tải ảnh lên"}
            </button>
            {value && (
              <button
                type="button"
                onClick={() => onChange("")}
                className="rounded-lg border border-ink/20 px-4 py-2 text-sm text-ink-soft hover:border-ink/40"
              >
                Xóa ảnh
              </button>
            )}
          </div>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="hidden"
          />
          <input
            type="text"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Hoặc dán đường dẫn ảnh"
            className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-xs text-ink-soft outline-none focus:border-rust"
          />
          {error && <p className="mt-2 text-xs text-rust-dark">{error}</p>}
        </div>
      </div>
    </div>
  );
}
