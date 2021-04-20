import PropTypes from "prop-types";
import cx from "classnames";

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
  rounded,
  isLoading,
}) {
  const isSmall = size === SIZES.sm;
  const isMedium = size === SIZES.md;
  const isLarge = size === SIZES.lg;

  const baseBtnClasses =
    "hover:bg-yellow hover:shadow-lg bg-green shadow-md text-white font-light text-xl inline-flex items-center justify-center relative";
  const btnClassNames = cx(baseBtnClasses, classNames, {
    "py-1": isSmall,
    "px-2": isSmall,
    "p-2": isMedium,
    "p-3": isLarge,
    "w-full": full,
    rounded: rounded,
  });

  return (
    <button className={btnClassNames} onClick={onClick} type={type}>
      {isLoading && (
        <svg
          className="absolute left-6 animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
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
  isLoading: PropTypes.bool,
};
