import PropTypes from "prop-types";
import cx from "classnames";

export default function UnitFormNavLink({
  className,
  label,
  active,
  setActiveSection,
}) {
  return (
    <li
      className={cx(
        "inline-block capitalize cursor-pointer hover:underline",
        className,
        {
          underline: active,
        }
      )}
      onClick={setActiveSection}
    >
      {label}
    </li>
  );
}

UnitFormNavLink.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setActiveSection: PropTypes.func.isRequired,
}
