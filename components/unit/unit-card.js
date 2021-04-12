import Input from "../common/input";
import PropTypes from "prop-types";
import format from "date-fns/format";

export default function UnitCard({ unit, subjectName }) {
  const startDate = format(new Date(unit.startDate), "LLL d");
  const endDate = format(new Date(unit.endDate), "LLL d, yyyy");
  const reviewDate = format(new Date(unit.reviewDate), "MMMM d, yyyy");
  const unitDuration = `${startDate} - ${endDate}`;

  return (
    <div className="flex flex-col">
      <div className="rounded-full bg-yellow w-24 h-24 text-4xl font-light flex justify-center self-center">
        <div className="self-center">U{unit.number}</div>
      </div>
      <div className="self-center font-semibold text-white text-lg mt-4">
        {subjectName}
      </div>
      <div className="self-center text-white mt-2 mb-6 tracking-wider font-light">
        {unit.title}
      </div>
      <Input
        inputClass="text-center text-lg font-light tracking-wide p-1"
        type="text"
        label="unit duration"
        value={unitDuration}
        gray
        readonly
        full
      />
      <Input
        inputClass="text-center text-lg font-light tracking-wide p-1"
        labelClass="mt-4"
        className="self-center"
        type="text"
        label="final review"
        value={reviewDate}
        gray
        readonly
        full
      />
    </div>
  );
}

UnitCard.propTypes = {
  unit: PropTypes.object,
  subjectName: PropTypes.any,
};
