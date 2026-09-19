import { Link } from "react-router-dom";

const variants = {
  primary: "bg-rust text-cream hover:bg-rust-dark",
  outline: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-cream",
  ghost: "bg-cream/10 text-cream border border-cream/30 hover:bg-cream/20",
  light: "bg-cream text-ink hover:bg-white",
};

export default function Button({
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  children,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  );
}
