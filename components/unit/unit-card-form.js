import Input from "../common/input";
import Button from "../common/button";
import { UNIT_FORM_DATA_SYMBOLS } from "../../libs/constants";
import PropTypes from "prop-types";

export default function UnitCardForm({
  unitNumber,
  unitTitle,
  startDate,
  endDate,
  reviewDate,
  onChange,
  closeAction,
}) {

  function handleUnitCreation(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleUnitCreation} className="grid grid-cols-1 gap-3">
      <Input
        onChange={onChange.bind(null, UNIT_FORM_DATA_SYMBOLS.unitNumber)}
        value={unitNumber}
        type="number"
        label="unit number"
        required
      ></Input>
      <Input
        onChange={onChange.bind(null, UNIT_FORM_DATA_SYMBOLS.unitTitle)}
        value={unitTitle}
        type="text"
        label="unit title"
        required
      ></Input>
      <Input
        onChange={onChange.bind(null, UNIT_FORM_DATA_SYMBOLS.startDate)}
        value={startDate}
        type="date"
        label="start date"
        required
      ></Input>
      <Input
        onChange={onChange.bind(null, UNIT_FORM_DATA_SYMBOLS.endDate)}
        value={endDate}
        type="date"
        label="end date"
        required
      ></Input>
      <Input
        onChange={onChange.bind(null, UNIT_FORM_DATA_SYMBOLS.reviewDate)}
        value={reviewDate}
        type="date"
        label="review date"
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
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  reviewDate: PropTypes.object,
};
