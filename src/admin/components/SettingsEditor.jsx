import Field from "./Field";
import ImageField from "./ImageField";

function ItemCard({ title, onRemove, onUp, onDown, children }) {
  return (
    <div className="rounded-xl border border-ink/10 bg-cream-soft/50 p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-ink">{title}</p>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={onUp}
            className="rounded-md border border-ink/15 px-2 py-1 text-xs text-ink-soft hover:border-ink/40"
            title="Lên trên"
          >
            ↑
          </button>
          <button
            type="button"
            onClick={onDown}
            className="rounded-md border border-ink/15 px-2 py-1 text-xs text-ink-soft hover:border-ink/40"
            title="Xuống dưới"
          >
            ↓
          </button>
          <button
            type="button"
            onClick={onRemove}
            className="rounded-md border border-ink/15 px-2 py-1 text-xs text-ink-soft hover:border-rust hover:text-rust-dark"
            title="Xóa"
          >
            Xóa
          </button>
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function move(list, from, to) {
  if (to < 0 || to >= list.length) return list;
  const next = [...list];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

function ObjectList({ field, value, onChange }) {
  const items = Array.isArray(value) ? value : [];
  const update = (i, key, v) => onChange(items.map((it, idx) => (idx === i ? { ...it, [key]: v } : it)));

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink">{field.label}</label>
      <div className="space-y-4">
        {items.map((item, i) => (
          <ItemCard
            key={i}
            title={`${field.itemLabel || "Mục"} ${i + 1}`}
            onRemove={() => onChange(items.filter((_, idx) => idx !== i))}
            onUp={() => onChange(move(items, i, i - 1))}
            onDown={() => onChange(move(items, i, i + 1))}
          >
            {field.fields.map((sub) => (
              <Field
                key={sub.name}
                field={sub}
                value={item[sub.name]}
                onChange={(v) => update(i, sub.name, v)}
              />
            ))}
          </ItemCard>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onChange([...items, {}])}
        className="mt-3 rounded-lg border border-ink/20 px-4 py-2 text-sm text-ink-soft hover:border-ink/40 hover:text-ink"
      >
        + Thêm {(field.itemLabel || "mục").toLowerCase()}
      </button>
    </div>
  );
}

function ImageList({ field, value, onChange }) {
  const items = Array.isArray(value) ? value : [];
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink">{field.label}</label>
      <div className="space-y-4">
        {items.map((url, i) => (
          <ItemCard
            key={i}
            title={`${field.itemLabel || "Ảnh"} ${i + 1}`}
            onRemove={() => onChange(items.filter((_, idx) => idx !== i))}
            onUp={() => onChange(move(items, i, i - 1))}
            onDown={() => onChange(move(items, i, i + 1))}
          >
            <ImageField value={url} onChange={(v) => onChange(items.map((u, idx) => (idx === i ? v : u)))} />
          </ItemCard>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onChange([...items, ""])}
        className="mt-3 rounded-lg border border-ink/20 px-4 py-2 text-sm text-ink-soft hover:border-ink/40 hover:text-ink"
      >
        + Thêm ảnh
      </button>
    </div>
  );
}

export default function SettingsEditor({ schema, value, onChange }) {
  if (schema.kind === "list") {
    return (
      <ObjectList
        field={{ label: "", itemLabel: schema.itemLabel, fields: schema.fields }}
        value={value}
        onChange={onChange}
      />
    );
  }

  if (schema.kind === "pageCopy") {
    const data = value || {};
    return (
      <div className="space-y-4">
        {schema.pages.map((page) => {
          const entry = data[page.key] || {};
          const set = (k, v) => onChange({ ...data, [page.key]: { ...entry, [k]: v } });
          return (
            <div key={page.key} className="rounded-xl border border-ink/10 bg-cream-soft/50 p-5">
              <p className="mb-4 text-sm font-semibold text-ink">{page.label}</p>
              <div className="space-y-4">
                <Field
                  field={{ label: "Nhãn nhỏ", type: "text" }}
                  value={entry.label}
                  onChange={(v) => set("label", v)}
                />
                <Field
                  field={{ label: "Tiêu đề lớn", type: "text" }}
                  value={entry.title}
                  onChange={(v) => set("title", v)}
                />
                <Field
                  field={{ label: "Mô tả", type: "textarea", rows: 3 }}
                  value={entry.desc}
                  onChange={(v) => set("desc", v)}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  const data = value || {};
  return (
    <div className="space-y-5">
      {schema.fields.map((field) => {
        const set = (v) => onChange({ ...data, [field.name]: v });
        if (field.type === "objectList") {
          return <ObjectList key={field.name} field={field} value={data[field.name]} onChange={set} />;
        }
        if (field.type === "imageList") {
          return <ImageList key={field.name} field={field} value={data[field.name]} onChange={set} />;
        }
        return <Field key={field.name} field={field} value={data[field.name]} onChange={set} />;
      })}
    </div>
  );
}
