import Input from "../../components/common/input";
import Button from "../../components/common/button";
import { useSelector, useDispatch } from "react-redux";
import {
  setStartDate,
  setEndDate,
  setReviewDate,
} from "../../store/unit-slicer";
import PropTypes from "prop-types";

export default function UnitFormDates({ handleUpdate }) {
  const dispatch = useDispatch();
  const startDate = useSelector((state) => state.unit.startDate);
  const endDate = useSelector((state) => state.unit.endDate);
  const reviewDate = useSelector((state) => state.unit.reviewDate);

  return (
    <div className="flex justify-between w-full md:space-x-12 md:flex-row sm:flex-col">
      <Input
        label="start date"
        inputClass="w-full"
        labelClass="flex-grow"
        type="date"
        value={startDate}
        onChange={(event) => dispatch(setStartDate(event.target.value))}
      />
      <Input
        label="end date"
        inputClass="w-full"
        labelClass="flex-grow"
        type="date"
        value={endDate}
        onChange={(event) => dispatch(setEndDate(event.target.value))}
      />
      <Input
        label="review date"
        inputClass="w-full"
        labelClass="flex-grow"
        type="date"
        value={reviewDate}
        onChange={(event) => dispatch(setReviewDate(event.target.value))}
      />
      <Button
        text="Save"
        size="md"
        classNames="px-14 self-end"
        rounded
        onClick={handleUpdate}
      />
    </div>
  );
}

UnitFormDates.propTypes = {
  handleUpdate: PropTypes.func,
};
