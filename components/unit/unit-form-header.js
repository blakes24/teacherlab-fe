import PropTypes from "prop-types";

export default function UnitFormHeader({ unit }) {
  return (
    <div className="flex space-x-6 items-center mb-2">
      <div className="rounded-full bg-yellow w-16 h-16 text-2xl font-light flex justify-center self-center">
        <div className="self-center text-black">U{unit.number}</div>
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-light">{unit.title}</span>
        <span>{unit.subjectName}</span>
      </div>
    </div>
  );
}

UnitFormHeader.propTypes = {
  unit: PropTypes.object.isRequired,
};
