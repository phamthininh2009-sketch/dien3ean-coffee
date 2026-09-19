export default function SectionLabel({ children, light = false }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className={`h-px w-8 ${light ? "bg-rust-light" : "bg-rust"}`} />
      <span className={`section-label ${light ? "text-rust-light" : ""}`}>{children}</span>
    </div>
  );
}
