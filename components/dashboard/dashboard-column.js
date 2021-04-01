import UnitCard from "../unit/unit-card";
import { SUBJECTS } from "../../libs/constants";
import PropTypes from "prop-types";
import { useState } from "react";

export default function DashboardColumn({ subject }) {
  const [showUnitCard, setShowUnitCard] = useState(false);

  // TODO
  // props
  // image

  function toggleUnitCard() {
    setShowUnitCard(true);
  }

  return (
    <>
      <div className="flex pt-36 flex-col">
        {showUnitCard ? (
          <UnitCard></UnitCard>
        ) : (
          <>
            <div className="w-40 h-40 bg-abc bg-center bg-contain bg-no-repeat bg-blue rounded-full self-center"></div>

            <div className="text-center text-sm mt-4 w-80 self-center">
              You don’t have any {subject} units yet! Add an {subject} unit to
              get started.
            </div>

            <button className="w-7/12 shadow-md bg-green text-white font-light p-2 text-xl self-center mt-36" onClick={toggleUnitCard}>
              Add {subject} Unit
            </button>
          </>
        )}
      </div>
    </>
  );
}

DashboardColumn.propTypes = {
  subject: PropTypes.oneOf(Object.values(SUBJECTS)).isRequired,
  // imageSrc: PropTypes.string.isRequired,
};
