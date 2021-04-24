import Input from "../common/input";
import PropTypes from "prop-types";
import format from "date-fns/format";
import Button from "../common/button";
import { useRouter } from "next/router";

export default function UnitCard({ unit, subjectName }) {
  const startDate = format(new Date(unit.startDate), "LLL d");
  const endDate = format(new Date(unit.endDate), "LLL d, yyyy");
  const reviewDate = format(new Date(unit.reviewDate), "MMMM d, yyyy");
  const unitDuration = `${startDate} - ${endDate}`;
  const router = useRouter();

  function navigateToUnit(unitId) {
    router.push(`/units/${unitId}`);
  }

  return (
    <div className="flex flex-col">
      <div className="rounded-full bg-yellow w-24 h-24 mt-2 text-4xl font-light flex justify-center self-center">
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
      <Button
        onClick={() => navigateToUnit(unit.id)}
        text="Go to Unit"
        classNames="mt-7 px-4 rounded-md self-center"
        size="md"
        type="button"
      ></Button>
    </div>
  );
}

UnitCard.propTypes = {
  unit: PropTypes.object,
  subjectName: PropTypes.any,
};
