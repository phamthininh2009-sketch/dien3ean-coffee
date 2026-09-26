import { useEffect, useMemo, useState } from "react";
import Field from "./Field";
import { deleteRow, insertRow, listRows, updateRow } from "../lib/api";

function blankRow(schema) {
  const row = {};
  for (const f of schema.fields) {
    if (f.type === "tags" || f.type === "lines") row[f.name] = [];
    else if (f.type === "number") row[f.name] = 0;
    else row[f.name] = "";
  }
  return row;
}

export default function CollectionEditor({ schema }) {
  const [rows, setRows] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [draft, setDraft] = useState(null);
  const [status, setStatus] = useState({ loading: true, saving: false, error: "", saved: false });

  async function reload(keepId) {
    setStatus((s) => ({ ...s, loading: true, error: "" }));
    try {
      const data = await listRows(schema.table, schema.orderBy || "sort_order");
      setRows(data);
      const next = keepId ? data.find((r) => r.id === keepId) : null;
      if (next) {
        setSelectedId(next.id);
        setDraft(next);
      }
    } catch (err) {
      setStatus((s) => ({ ...s, error: err.message }));
    } finally {
      setStatus((s) => ({ ...s, loading: false }));
    }
  }

  useEffect(() => {
    setSelectedId(null);
    setDraft(null);
    reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schema.table]);

  const titleOf = useMemo(
    () => (row) => row?.[schema.titleField || "name"] || "(chưa đặt tên)",
    [schema.titleField],
  );

  function pick(row) {
    setSelectedId(row.id);
    setDraft({ ...row });
    setStatus((s) => ({ ...s, error: "", saved: false }));
  }

  function startNew() {
    setSelectedId("new");
    setDraft({ ...blankRow(schema), sort_order: rows.length + 1 });
    setStatus((s) => ({ ...s, error: "", saved: false }));
  }

  async function save() {
    setStatus((s) => ({ ...s, saving: true, error: "", saved: false }));
    try {
      const payload = {};
      for (const f of schema.fields) payload[f.name] = draft[f.name];
      const saved =
        selectedId === "new"
          ? await insertRow(schema.table, payload)
          : await updateRow(schema.table, selectedId, payload);
      await reload(saved.id);
      setStatus((s) => ({ ...s, saved: true }));
    } catch (err) {
      setStatus((s) => ({ ...s, error: err.message }));
    } finally {
      setStatus((s) => ({ ...s, saving: false }));
    }
  }

  async function remove() {
    if (!window.confirm(`Xóa "${titleOf(draft)}"? Thao tác này không thể hoàn tác.`)) return;
    setStatus((s) => ({ ...s, saving: true, error: "" }));
    try {
      await deleteRow(schema.table, selectedId);
      setSelectedId(null);
      setDraft(null);
      await reload();
    } catch (err) {
      setStatus((s) => ({ ...s, error: err.message }));
    } finally {
      setStatus((s) => ({ ...s, saving: false }));
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-ink">{schema.title}</h1>
          {schema.description && <p className="mt-1 text-sm text-ink-soft">{schema.description}</p>}
        </div>
        <button
          onClick={startNew}
          className="rounded-lg bg-rust px-4 py-2 text-sm font-semibold text-cream hover:bg-rust-dark"
        >
          + Thêm mới
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-1">
          {status.loading && <p className="text-sm text-ink-soft">Đang tải...</p>}
          {!status.loading && rows.length === 0 && (
            <p className="text-sm text-ink-soft">Chưa có mục nào.</p>
          )}
          {rows.map((row) => (
            <button
              key={row.id}
              onClick={() => pick(row)}
              className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                selectedId === row.id ? "bg-ink text-cream" : "text-ink-soft hover:bg-ink/5 hover:text-ink"
              }`}
            >
              {titleOf(row)}
            </button>
          ))}
          {selectedId === "new" && (
            <div className="rounded-lg bg-rust/10 px-3 py-2.5 text-sm font-medium text-rust-dark">
              Mục mới chưa lưu
            </div>
          )}
        </aside>

        <section>
          {!draft && (
            <div className="rounded-xl border border-dashed border-ink/20 p-10 text-center text-sm text-ink-soft">
              Chọn một mục bên trái để sửa, hoặc bấm Thêm mới.
            </div>
          )}

          {draft && (
            <div className="rounded-xl border border-ink/10 bg-white p-6">
              <div className="space-y-5">
                {schema.fields.map((field) => (
                  <Field
                    key={field.name}
                    field={field}
                    value={draft[field.name]}
                    onChange={(v) => setDraft((d) => ({ ...d, [field.name]: v }))}
                  />
                ))}
              </div>

              {status.error && (
                <p className="mt-5 rounded-lg bg-rust/10 px-4 py-3 text-sm text-rust-dark">{status.error}</p>
              )}

              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-ink/10 pt-5">
                <button
                  onClick={save}
                  disabled={status.saving}
                  className="rounded-lg bg-rust px-5 py-2.5 text-sm font-semibold text-cream hover:bg-rust-dark disabled:opacity-50"
                >
                  {status.saving ? "Đang lưu..." : "Lưu thay đổi"}
                </button>
                {selectedId !== "new" && (
                  <button
                    onClick={remove}
                    disabled={status.saving}
                    className="rounded-lg border border-ink/20 px-5 py-2.5 text-sm text-ink-soft hover:border-rust hover:text-rust-dark disabled:opacity-50"
                  >
                    Xóa
                  </button>
                )}
                {status.saved && <span className="text-sm text-ink-soft">Đã lưu</span>}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
