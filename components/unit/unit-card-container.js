import UnitCardForm from "./unit-card-form";
import UnitCard from "./unit-card";
import PropTypes from "prop-types";
import { UNIT_FORM_DATA_SYMBOLS } from "../../libs/constants";
import { useState } from "react";

export default function UnitCardContainer({
  closeAction,
  subject,
  showUnitCard,
}) {
  const [unitNumber, setUnitNumber] = useState("1");
  const [unitTitle, setUnitTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reviewDate, setReviewDate] = useState("");
  const firstUnit = subject.units[0];
  const unitCardClasses = "bg-blue w-72 mx-auto p-7 pt-4"

  function handleUnitFormDataChange(inputSymbol, event) {
    const value = event.target.value;

    switch (inputSymbol) {
      case UNIT_FORM_DATA_SYMBOLS.unitNumber:
        setUnitNumber(value);
        break;
      case UNIT_FORM_DATA_SYMBOLS.unitTitle:
        setUnitTitle(value);
        break;
      case UNIT_FORM_DATA_SYMBOLS.startDate:
        setStartDate(value);
        break;
      case UNIT_FORM_DATA_SYMBOLS.endDate:
        setEndDate(value);
        break;
      case UNIT_FORM_DATA_SYMBOLS.reviewDate:
        setReviewDate(value);
        break;
    }
  }

  function handleNewUnitData(data) {
    subject.units.push(data);
    showUnitCard = true;
    closeAction();
  }

  return (
    <div
      className={unitCardClasses}
    >
      {showUnitCard ? (
        <UnitCard unit={firstUnit} subjectName={subject.name}></UnitCard>
      ) : (
        <UnitCardForm
          onChange={handleUnitFormDataChange}
          handleNewUnitData={handleNewUnitData}
          closeAction={closeAction}
          unitNumber={unitNumber}
          unitTitle={unitTitle}
          startDate={startDate}
          endDate={endDate}
          reviewDate={reviewDate}
          subjectId={subject.id}
        ></UnitCardForm>
      )}
    </div>
  );
}

UnitCardContainer.propTypes = {
  closeAction: PropTypes.func,
  subject: PropTypes.object,
  showUnitCard: PropTypes.bool,
  user: PropTypes.object,
};
