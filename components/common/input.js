import PropTypes from "prop-types";
import { addUnderscoresToString, generateRandomId } from "../../libs/utils";
import cx from "classnames";

const TYPES = {
  text: "text",
  number: "number",
  date: "date",
  checkBox: "checkbox",
};

export default function Input({
  label,
  type,
  value,
  onChange,
  required,
  readonly,
  labelClass,
  inputClass,
  gray,
  full,
  placeholder,
  checked,
}) {
  const inputClasses = cx(
    "mt-1 block rounded-md border-transparent focus:ring-0",
    {
      "w-full": full,
      "bg-gray-100 focus:border-gray-500 focus:bg-white": gray,
      "text-black": !gray,
    },
    inputClass
  );
  const labelClassNames = cx("block", labelClass);
  const labelSpanClassNames = cx("uppercase font-light", {
    "text-white": gray,
  });
  const inputId = label && addUnderscoresToString(label);

  return (
    <>
      <label htmlFor={inputId} className={labelClassNames}>
        {label && <span className={labelSpanClassNames}>{label}</span>}
        {type === TYPES.text && (
          <input
            id={inputId}
            className={inputClasses}
            type="text"
            value={value}
            onChange={onChange}
            required={required}
            readOnly={readonly}
            placeholder={placeholder}
          />
        )}
        {type === TYPES.number && (
          <input
            id={inputId}
            className={inputClasses}
            type="number"
            min="1"
            max="20"
            value={value}
            onChange={onChange}
            required={required}
            readOnly={readonly}
          />
        )}
        {type === TYPES.date && (
          <input
            id={inputId}
            className={inputClasses}
            type="date"
            value={value}
            onChange={onChange}
            required={required}
            readOnly={readonly}
            placeholder={placeholder}
          />
        )}
        {type === TYPES.checkBox && (
          <input
            id={inputId}
            className={inputClasses}
            className="appearance-none checked:border-transparent focus:ring-0 focus:ring-offset-0 border-transparent focus:ring-white border-none bg-gray-200 text-gray-700"
            type="checkbox"
            onChange={onChange}
            required={required}
            checked={checked}
          />
        )}
      </label>
    </>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TYPES)).isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.any,
  readonly: PropTypes.bool,
  labelClass: PropTypes.string,
  inputClass: PropTypes.string,
  full: PropTypes.bool,
  gray: PropTypes.bool,
  checked: PropTypes.bool,
};
