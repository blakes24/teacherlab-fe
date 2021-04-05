import Input from "../common/input";
import Button from "../common/button";
import { UNIT_FORM_DATA_SYMBOLS } from "../../libs/constants";
import { formatDateForForm } from "../../libs/utils";
import { createUnit } from "../../services/unit";
import PropTypes from "prop-types";

export default function UnitCardForm({
  unitNumber,
  unitTitle,
  startDate,
  endDate,
  reviewDate,
  subjectId,
  onChange,
  closeAction,
  handleNewUnitData,
}) {
  function handleUnitCreation(e) {
    e.preventDefault();

    const formData = {
      [UNIT_FORM_DATA_SYMBOLS.unitNumber]: unitNumber,
      [UNIT_FORM_DATA_SYMBOLS.unitTitle]: unitTitle,
      [UNIT_FORM_DATA_SYMBOLS.startDate]: formatDateForForm(startDate),
      [UNIT_FORM_DATA_SYMBOLS.endDate]: formatDateForForm(endDate),
      [UNIT_FORM_DATA_SYMBOLS.reviewDate]: formatDateForForm(reviewDate),
      [UNIT_FORM_DATA_SYMBOLS.subjectId]: subjectId,
    };

    try {
      createUnit(formData).then((data) => {
        handleNewUnitData(data);
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form onSubmit={handleUnitCreation} className="grid grid-cols-1 gap-3">
      <Input
        onChange={onChange.bind(null, UNIT_FORM_DATA_SYMBOLS.unitNumber)}
        value={unitNumber}
        type="number"
        label="unit number"
        gray
        full
        required
      ></Input>
      <Input
        onChange={onChange.bind(null, UNIT_FORM_DATA_SYMBOLS.unitTitle)}
        value={unitTitle}
        type="text"
        label="unit title"
        gray
        full
        required
      ></Input>
      <Input
        onChange={onChange.bind(null, UNIT_FORM_DATA_SYMBOLS.startDate)}
        value={startDate}
        type="date"
        label="start date"
        gray
        full
        required
      ></Input>
      <Input
        onChange={onChange.bind(null, UNIT_FORM_DATA_SYMBOLS.endDate)}
        value={endDate}
        type="date"
        label="end date"
        gray
        full
        required
      ></Input>
      <Input
        onChange={onChange.bind(null, UNIT_FORM_DATA_SYMBOLS.reviewDate)}
        value={reviewDate}
        type="date"
        label="review date"
        gray
        full
        required
      ></Input>
      <div className="flex justify-around">
        <Button
          text="Cancel"
          onClick={closeAction}
          classNames="mt-2 w-28 place-self-center box-border"
          size="sm"
          rounded
          type="button"
        ></Button>
        <Button
          text="Add Unit"
          classNames="mt-2 w-28 place-self-center box-border"
          size="sm"
          rounded
          type="submit"
        ></Button>
      </div>
    </form>
  );
}

UnitCardForm.propTypes = {
  closeAction: PropTypes.func,
  unitNumber: PropTypes.string,
  unitTitle: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  reviewDate: PropTypes.string,
  subjectId: PropTypes.number,
};
