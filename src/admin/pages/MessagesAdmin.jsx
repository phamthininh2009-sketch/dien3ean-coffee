import { useEffect, useState } from "react";
import { listMessages, setMessageStatus } from "../lib/api";

function formatWhen(value) {
  return new Date(value).toLocaleString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function MessagesAdmin() {
  const [messages, setMessages] = useState([]);
  const [status, setStatus] = useState({ loading: true, error: "" });

  async function reload() {
    try {
      setMessages(await listMessages());
    } catch (err) {
      setStatus((s) => ({ ...s, error: err.message }));
    } finally {
      setStatus((s) => ({ ...s, loading: false }));
    }
  }

  useEffect(() => {
    reload();
  }, []);

  async function toggle(message) {
    const next = message.status === "done" ? "new" : "done";
    await setMessageStatus(message.id, next);
    setMessages((list) => list.map((m) => (m.id === message.id ? { ...m, status: next } : m)));
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold text-ink">Tin nhắn liên hệ</h1>
      <p className="mt-1 text-sm text-ink-soft">Tin nhắn khách gửi từ form ở trang Liên hệ.</p>

      {status.loading && <p className="mt-8 text-sm text-ink-soft">Đang tải...</p>}
      {status.error && (
        <p className="mt-8 rounded-lg bg-rust/10 px-4 py-3 text-sm text-rust-dark">{status.error}</p>
      )}

      {!status.loading && messages.length === 0 && (
        <div className="mt-8 rounded-xl border border-dashed border-ink/20 p-10 text-center text-sm text-ink-soft">
          Chưa có tin nhắn nào.
        </div>
      )}

      <div className="mt-8 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`rounded-xl border bg-white p-5 ${
              message.status === "done" ? "border-ink/10 opacity-60" : "border-rust/30"
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-ink">{message.name}</p>
                <p className="mt-1 text-sm text-ink-soft">
                  {message.phone} · {message.email}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-ink-soft">{formatWhen(message.created_at)}</p>
                <button
                  onClick={() => toggle(message)}
                  className="mt-2 rounded-lg border border-ink/20 px-3 py-1.5 text-xs text-ink-soft hover:border-ink/40 hover:text-ink"
                >
                  {message.status === "done" ? "Đánh dấu chưa xử lý" : "Đánh dấu đã xử lý"}
                </button>
              </div>
            </div>
            <p className="mt-4 whitespace-pre-wrap border-t border-ink/10 pt-4 text-sm leading-relaxed text-ink-soft">
              {message.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
