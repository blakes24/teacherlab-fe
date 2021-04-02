import Input from "../common/input";
import Button from "../common/button";
import PropTypes from "prop-types";

export default function UnitCardForm({ closeAction }) {
  function handleUnitCreation(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleUnitCreation} className="grid grid-cols-1 gap-3">
      <Input type="number" label="unit number" required></Input>
      <Input type="text" label="unit title" required></Input>
      <Input type="date" label="start date" required></Input>
      <Input type="date" label="end date" required></Input>
      <Input type="date" label="review date" required></Input>
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
};
