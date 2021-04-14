import PropTypes from "prop-types";
import classnames from "classnames";

const SIZES = {
  sm: "sm",
  md: "md",
  lg: "lg",
};

const COLORS = {
  primary: "primary",
  secondary: "secondary"
}

export default function Button({
  onClick,
  text,
  classNames,
  size,
  full,
  type,
  rounded,
  color = COLORS.primary,
}) {
  const isSmall = size === SIZES.sm;
  const isMedium = size === SIZES.md;
  const isLarge = size === SIZES.lg;

  const baseBtnClasses = "shadow-md text-white font-light text-xl";
  const btnClassNames = classnames(baseBtnClasses, classNames, {
    "py-1": isSmall,
    "px-2": isSmall,
    "p-2": isMedium,
    "p-3": isLarge,
    "w-full": full,
    "bg-green": color === COLORS.primary,
    "bg-yellow": color === COLORS.secondary,
    rounded: rounded,
  });

  return (
    <button className={btnClassNames} onClick={onClick} type={type}>
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  size: PropTypes.oneOf(Object.values(SIZES)),
  full: PropTypes.bool,
  type: PropTypes.string,
  rounded: PropTypes.bool,
  color: PropTypes.oneOf(["primary", "secondary"])
};
