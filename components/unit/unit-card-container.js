import Input from "../common/input";
import Button from "../common/button";
import UnitCardForm from "./unit-card-form";
import PropTypes from "prop-types";

export default function UnitCardContainer({ closeAction }) {
  return (
    <div className="bg-blue w-72 mx-auto p-7  pt-4">
      <UnitCardForm closeAction={closeAction}></UnitCardForm>
    </div>
  );
}

UnitCardContainer.propTypes = {
  closeAction: PropTypes.func,
};
