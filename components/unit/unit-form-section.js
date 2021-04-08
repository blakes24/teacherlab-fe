import PropTypes from "prop-types";

export default function UnitFormSection({ children, tabText }) {
  return (
    <>
      <div>
        {tabText && (
          <div className="bg-blue inline-block px-4 py-1 text-lg text-white font-light">
            {tabText}
          </div>
        )}
        <div className="p-6 bg-gray-200 flex items-center justify-between">
          {children}
        </div>
      </div>
    </>
  );
}

UnitFormSection.propTypes = {
  tabText: PropTypes.string,
};
