import PropTypes from "prop-types";

function Button({
  children = "Button",
  size = "lg",
  color = "primary",
  type = "btn",
  className = "",
}) {
  const styles = {
    base: `inline-flex items-center justify-center whitespace-nowrap transition-all ${
      type == "link"
        ? "disabled:text-gray-400"
        : "rounded-md border shadow-xs focus:ring-2 disabled:border-gray-200 disabled:bg-gray-100 disabled:text-gray-400"
    }`,
    sizeBtn: {
      sm: "gap-1 px-3 py-2 font-bold text-sm",
      md: "gap-1 px-3.5 py-2.5 font-bold text-sm",
      lg: "gap-1.5 px-4 py-2.5 font-semibold text-base",
      xl: "gap-1.5 px-4.5 py-3 font-semibold text-base",
      "2xl": "gap-2.5 px-5.5 py-4 font-semibold text-lg",
    },
    sizeLink: {
      sm: "gap-1.5 font-bold text-sm",
      md: "gap-1.5 font-bold text-sm",
      lg: "gap-2 font-semibold text-base",
      xl: "gap-2 font-semibold text-base",
      "2xl": "gap-3 font-semibold text-lg",
    },
    color: {
      primary:
        "text-base-white border-brand-600 bg-brand-600  hover:border-brand-700 hover:bg-brand-700 ring-brand-600/[.24]",
      secondary:
        "text-brand-700 border-brand-300 bg-yellow-300 hover:text-brand-800 hover:border-yellow-400 hover:bg-yellow-400 ring-brand-600/[.24]",
      tertiary: "text-brand-800 hover:border-brand-50 focus:text-brand-700",
      link: "text-brand-700 hover:text-brand-800",
      "link-dark": "text-gray-200 hover:text-brand-200",
    },
  };
  return (
    <button
      className={`${styles.base} ${
        type == "link" ? styles.sizeLink[size] : styles.sizeBtn[size]
      } ${styles.color[color]} ${className}`}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  color: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
