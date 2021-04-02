import PropTypes from "prop-types";
import { addUnderscoresToString } from "../../libs/utils";

const TYPES = {
  text: "text",
  number: "number",
  date: "date",
};

export default function Input({ label, type, placeholder, onChange, required }) {
  const inputClasses =
    "mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0";

  return (
    <>
      <label
        htmlFor={addUnderscoresToString(label)}
        className="block"
      >
        <span className="uppercase text-white font-light">{label}</span>
        {type === TYPES.text && (
          <input
            id={addUnderscoresToString(label)}
            className={inputClasses}
            type="text"
            required={required}
          />
        )}
        {type === TYPES.number && (
          <input
            id={addUnderscoresToString(label)}
            className={inputClasses}
            type="number"
            min="1"
            max="20"
            required={required}
          />
        )}
        {type === TYPES.date && (
          <input
            id={addUnderscoresToString(label)}
            className={inputClasses}
            type="date"
            required={required}
          />
        )}
      </label>
    </>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(TYPES)).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};
