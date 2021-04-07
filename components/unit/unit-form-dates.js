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
    <>
      <Input
        label="start date"
        type="date"
        value={startDate}
        onChange={(event) => dispatch(setStartDate(event.target.value))}
      />
      <Input
        label="end date"
        type="date"
        value={endDate}
        onChange={(event) => dispatch(setEndDate(event.target.value))}
      />
      <Input
        label="review date"
        type="date"
        value={reviewDate}
        onChange={(event) => dispatch(setReviewDate(event.target.value))}
      />
      <Button
        text="Save"
        size="sm"
        classNames="px-6 self-end"
        rounded
        onClick={handleUpdate}
      />
    </>
  );
}

UnitFormDates.propTypes = {
  handleUpdate: PropTypes.func,
};
