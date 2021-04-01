import PropTypes from "prop-types";
import classnames from "classnames";

const SIZES = {
  sm: "sm",
  md: "md",
  lg: "lg",
};

export default function Button({
  onClick,
  text,
  classNames,
  size,
  full,
  type,
}) {
  const isSmall = size === SIZES.sm;
  const isMedium = size === SIZES.md;
  const isLarge = size === SIZES.lg;

  const baseBtnClasses = "bg-green shadow-md text-white font-light text-xl";
  const btnClassNames = classnames(baseBtnClasses, classNames, {
    "p-2": isMedium,
    "p-3": isLarge,
    "w-full": full,
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
};
