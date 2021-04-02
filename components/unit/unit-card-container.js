import UnitCardForm from "./unit-card-form";
import PropTypes from "prop-types";
import { UNIT_FORM_DATA_SYMBOLS } from "../../libs/constants";
import { useState } from "react";

export default function UnitCardContainer({ closeAction }) {
  const [unitNumber, setUnitNumber] = useState("1");
  const [unitTitle, setUnitTitle] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [reviewDate, setReviewDate] = useState();

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

  return (
    <div className="bg-blue w-72 mx-auto p-7  pt-4">
      <UnitCardForm
        onChange={handleUnitFormDataChange}
        closeAction={closeAction}
        unitNumber={unitNumber}
      ></UnitCardForm>
    </div>
  );
}

UnitCardContainer.propTypes = {
  closeAction: PropTypes.func,
};
