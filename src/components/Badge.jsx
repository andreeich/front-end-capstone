function Badge({ children, color = "gray", size = "sm" }) {
  const styles = {
    base: `inline-flex items-center justify-center whitespace-nowrap transition-all rounded-2xl border font-medium`,
    size: {
      sm: "text-text-xs px-2 py-0.5 gap-1",
      md: "text-text-sm px-2.5 py-0.5 gap-1.5",
      lg: "text-text-sm px-3 py-1 gap-1.5",
    },
    color: {
      gray: "border-gray-200 bg-gray-50 text-gray-700",
      "gray-dark": "border-base-white/[.3] bg-base-white/[.1] text-base-white",
      brand: "border-brand-200 bg-brand-50 text-brand-700",
      yellow: "border-yellow-200 bg-yellow-50 text-yellow-700",
      orange: "border-orange-200 bg-orange-50 text-orange-700",
    },
  };
  return (
    <div
      className={`${styles.base} ${styles.size[size]} ${styles.color[color]}`}
    >
      {children}
    </div>
  );
}

export default Badge;
