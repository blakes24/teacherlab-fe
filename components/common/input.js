import PropTypes from "prop-types";
import { addUnderscoresToString, generateRandomId } from "../../libs/utils";
import cx from "classnames";

const TYPES = {
  text: "text",
  number: "number",
  date: "date",
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
}) {
  const inputClasses = cx(
    "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0",
    inputClass
  );
  const labelClassNames = cx("block", labelClass);
  const inputId = `${addUnderscoresToString(label)}${generateRandomId()}`;

  return (
    <>
      <label
        htmlFor={addUnderscoresToString(label)}
        className={labelClassNames}
      >
        <span className="uppercase text-white font-light">{label}</span>
        {type === TYPES.text && (
          <input
            id={inputId}
            className={inputClasses}
            type="text"
            value={value}
            onChange={onChange}
            required={required}
            readOnly={readonly}
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
          />
        )}
      </label>
    </>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(TYPES)).isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  value: PropTypes.any,
  readonly: PropTypes.bool,
  labelClass: PropTypes.string,
  inputClass: PropTypes.string,
};
