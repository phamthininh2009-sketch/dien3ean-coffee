import { useEffect, useState } from "react";
import SettingsEditor from "../components/SettingsEditor";
import { settingsSchemas } from "../schemas";
import { listSettings, saveSetting } from "../lib/api";

export default function ContentAdmin() {
  const [groups, setGroups] = useState([]);
  const [activeKey, setActiveKey] = useState(null);
  const [draft, setDraft] = useState(null);
  const [status, setStatus] = useState({ loading: true, saving: false, error: "", saved: false });

  useEffect(() => {
    (async () => {
      try {
        const data = await listSettings();
        const usable = data.filter((g) => settingsSchemas[g.key]);
        setGroups(usable);
        if (usable.length > 0) {
          setActiveKey(usable[0].key);
          setDraft(usable[0].value);
        }
      } catch (err) {
        setStatus((s) => ({ ...s, error: err.message }));
      } finally {
        setStatus((s) => ({ ...s, loading: false }));
      }
    })();
  }, []);

  function pick(group) {
    setActiveKey(group.key);
    setDraft(group.value);
    setStatus((s) => ({ ...s, error: "", saved: false }));
  }

  async function save() {
    setStatus((s) => ({ ...s, saving: true, error: "", saved: false }));
    try {
      await saveSetting(activeKey, draft);
      setGroups((gs) => gs.map((g) => (g.key === activeKey ? { ...g, value: draft } : g)));
      setStatus((s) => ({ ...s, saved: true }));
    } catch (err) {
      setStatus((s) => ({ ...s, error: err.message }));
    } finally {
      setStatus((s) => ({ ...s, saving: false }));
    }
  }

  const activeGroup = groups.find((g) => g.key === activeKey);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-ink">Nội dung chung</h1>
      <p className="mt-1 text-sm text-ink-soft">
        Chữ và ảnh ở các phần cố định của website: thương hiệu, câu chuyện, quy trình, FAQ, ảnh bìa từng trang.
      </p>

      {status.loading && <p className="mt-8 text-sm text-ink-soft">Đang tải...</p>}

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-1">
          {groups.map((group) => (
            <button
              key={group.key}
              onClick={() => pick(group)}
              className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                activeKey === group.key ? "bg-ink text-cream" : "text-ink-soft hover:bg-ink/5 hover:text-ink"
              }`}
            >
              {group.label}
            </button>
          ))}
        </aside>

        <section>
          {activeGroup && (
            <div className="rounded-xl border border-ink/10 bg-white p-6">
              <SettingsEditor schema={settingsSchemas[activeKey]} value={draft} onChange={setDraft} />

              {status.error && (
                <p className="mt-5 rounded-lg bg-rust/10 px-4 py-3 text-sm text-rust-dark">{status.error}</p>
              )}

              <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5">
                <button
                  onClick={save}
                  disabled={status.saving}
                  className="rounded-lg bg-rust px-5 py-2.5 text-sm font-semibold text-cream hover:bg-rust-dark disabled:opacity-50"
                >
                  {status.saving ? "Đang lưu..." : "Lưu thay đổi"}
                </button>
                {status.saved && <span className="text-sm text-ink-soft">Đã lưu</span>}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
