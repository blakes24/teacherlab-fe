import Input from "../common/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAssessment, removeAssessment } from "../../store/unit-slicer";
import { ASSESSMENT_VALUES } from "../../libs/constants";
import PropTypes from "prop-types";

function appendPercentage(number) {
  return `${number || 0}%`;
}

export default function AssessmentTableRow({
  assessment,
  index,
  assessmentType,
}) {
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = useState(false);
  const {
    levelOne: { field: beginningStepField },
    levelTwo: { field: nearingField },
    levelThree: { field: proficientField },
  } = ASSESSMENT_VALUES;

  function handleRemoveAssessment(index) {
    dispatch(
      removeAssessment({
        index,
        assessmentType,
      })
    );
  }

  function handleUpdate({ field, value, index }) {
    console.log(field, value, index);

    dispatch(
      updateAssessment({
        value,
        index,
        field,
        assessmentType,
      })
    );
  }

  function toggleAssessment(checked, index) {
    dispatch(
      updateAssessment({
        value: checked,
        index,
        field: "completed",
        assessmentType,
      })
    );
  }

  return (
    <tr className={assessment.completed ? "bg-yellow" : ""}>
      <td className="border border-black px-4 py-2">
        <Input
          type="checkbox"
          onChange={(event) => toggleAssessment(event.target.checked, index)}
          checked={assessment.completed}
        />
      </td>
      <td className="border border-black px-4 py-2">{assessment.name}</td>
      <td className="border border-black text-center">
        {isEditable ? (
          <Input
            type="number"
            inputClass="p-1 mx-auto mb-1"
            onChange={(event) =>
              handleUpdate({
                field: beginningStepField,
                value: event.target.value,
                index,
              })
            }
            value={assessment.beginningStep}
          />
        ) : (
          appendPercentage(assessment.beginningStep)
        )}
      </td>
      <td className="border border-black text-center">
        {isEditable ? (
          <Input
            type="number"
            inputClass="p-1 mx-auto mb-1"
            onChange={(event) =>
              handleUpdate({
                field: nearingField,
                value: event.target.value,
                index,
              })
            }
            value={assessment.nearing}
          />
        ) : (
          appendPercentage(assessment.nearing)
        )}
      </td>
      <td className="border border-black text-center">
        {isEditable ? (
          <Input
            type="number"
            inputClass="p-1 mx-auto mb-1"
            onChange={(event) =>
              handleUpdate({
                field: proficientField,
                value: event.target.value,
                index,
              })
            }
            value={assessment.proficiency}
          />
        ) : (
          appendPercentage(assessment.proficiency)
        )}
      </td>
      <td className="border border-black px-4 py-2 text-center">
        {assessment.date}
      </td>
      <td className="border border-black py-2 text-center">
        {isEditable ? (
          <FontAwesomeIcon
            icon={faCheck}
            className="cursor-pointer"
            size="lg"
            onClick={() => setIsEditable(false)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faPencilAlt}
            className="cursor-pointer"
            size="lg"
            onClick={() => setIsEditable(true)}
          />
        )}
        <FontAwesomeIcon
          className="ml-4 cursor-pointer"
          icon={faTrashAlt}
          size="lg"
          onClick={() => handleRemoveAssessment(index)}
        />
      </td>
    </tr>
  );
}

AssessmentTableRow.propTypes = {
  assessment: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  assessmentType: PropTypes.string.isRequired,
};
