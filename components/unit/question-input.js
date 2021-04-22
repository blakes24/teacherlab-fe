import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addAnswer } from "../../store/unit-slicer";

export default function QuestionInput({ id, label, value }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100 p-3 w-full">
      <label className="ml-1" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        className="w-full h-11 rounded-md mt-2"
        value={value}
        onChange={(event) => dispatch(addAnswer({  id, value:  event.target.value  }))}
        placeholder="Type Here..."
      ></textarea>
    </div>
  );
}

QuestionInput.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  value: PropTypes.string,
};
