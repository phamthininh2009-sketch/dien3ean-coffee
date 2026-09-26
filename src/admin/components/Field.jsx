import ImageField from "./ImageField";

const inputClass =
  "w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-sm text-ink outline-none focus:border-rust";

export default function Field({ field, value, onChange }) {
  const { type = "text", label, help, placeholder } = field;

  if (type === "image") {
    return (
      <div>
        <ImageField label={label} value={value} onChange={onChange} />
        {help && <p className="mt-1 text-xs text-ink-soft">{help}</p>}
      </div>
    );
  }

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink">{label}</label>

      {type === "textarea" && (
        <textarea
          rows={field.rows || 4}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={inputClass}
        />
      )}

      {type === "richtext" && (
        <textarea
          rows={field.rows || 16}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${inputClass} font-mono text-xs leading-relaxed`}
        />
      )}

      {type === "number" && (
        <input
          type="number"
          value={value ?? 0}
          onChange={(e) => onChange(Number(e.target.value))}
          className={inputClass}
        />
      )}

      {type === "date" && (
        <input
          type="date"
          value={value ? String(value).slice(0, 10) : ""}
          onChange={(e) => onChange(e.target.value || null)}
          className={inputClass}
        />
      )}

      {type === "select" && (
        <select value={value ?? ""} onChange={(e) => onChange(e.target.value || null)} className={inputClass}>
          <option value="">{field.emptyLabel || "Chọn..."}</option>
          {(field.options || []).map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}

      {type === "tags" && (
        <input
          type="text"
          value={Array.isArray(value) ? value.join(", ") : (value ?? "")}
          onChange={(e) =>
            onChange(
              e.target.value
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean),
            )
          }
          placeholder={placeholder || "Ngăn cách bằng dấu phẩy"}
          className={inputClass}
        />
      )}

      {type === "lines" && (
        <textarea
          rows={field.rows || 5}
          value={Array.isArray(value) ? value.join("\n") : (value ?? "")}
          onChange={(e) => onChange(e.target.value.split("\n").map((s) => s.trim()).filter(Boolean))}
          placeholder={placeholder || "Mỗi dòng một mục"}
          className={inputClass}
        />
      )}

      {type === "text" && (
        <input
          type="text"
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={inputClass}
        />
      )}

      {help && <p className="mt-1 text-xs text-ink-soft">{help}</p>}
    </div>
  );
}
