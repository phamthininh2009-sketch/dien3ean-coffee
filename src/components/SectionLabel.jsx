export default function SectionLabel({ children, light = false }) {
  return (
    <div className="mb-4">
      <span className={`section-label ${light ? "text-rust-light" : ""}`}>{children}</span>
    </div>
  );
}
