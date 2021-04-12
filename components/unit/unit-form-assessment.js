import Input from "../common/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssessment,
  updateAssessment,
  removeAssessment,
} from "../../store/unit-slicer";

export default function UnitFormAssessment({ assessmentType }) {
  const dispatch = useDispatch();
  const { [assessmentType]: assessments } = useSelector(
    (state) => state.unit.details.assessments
  );
  const [assessmentName, setAssessmentName] = useState();
  const [assessmentDate, setAssessmentDate] = useState();

  function handleAddAssessment() {
    if (assessmentName && assessmentDate) {
      dispatch(
        addAssessment({
          assessment: {
            name: assessmentName,
            date: assessmentDate,
            completed: false,
          },
          assessmentType,
        })
      );
    }
  }

  function handleRemoveAssessment(index) {
    dispatch(
      removeAssessment({
        index,
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
    <div className="bg-white w-full p-2 pb-3 border border-black">
      <div className="flex space-x-8 items-center">
        <Input
          placeholder="Assessment Name"
          labelClass="flex-grow"
          inputClass="w-full"
          type="text"
          onChange={(event) => setAssessmentName(event.target.value)}
        />
        <Input
          type="date"
          onChange={(event) => setAssessmentDate(event.target.value)}
        />
        <div>
          <FontAwesomeIcon
            icon={faPlusCircle}
            size="lg"
            className="mr-4"
            onClick={handleAddAssessment}
          />
        </div>
      </div>

      <table className="table-fixed w-full mt-3 text-sm">
        <tbody>
          {assessments &&
            assessments.map((assessment, index) => (
              <tr
                className={assessment.completed ? "bg-yellow" : ""}
                key={index}
              >
                <td className="border border-black px-4 py-2 w-12">
                  <Input
                    type="checkbox"
                    onChange={(event) =>
                      toggleAssessment(event.target.checked, index)
                    }
                    checked={assessment.completed}
                  />
                </td>
                <td className="border border-black px-4 py-2 w-3/5">
                  {assessment.name}
                </td>
                <td className="border border-black px-4 py-2 w-2/12 text-center">
                  {assessment.date}
                </td>
                <td className="border border-black px-4 py-2 w-1/12 text-center">
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    size="lg"
                    onClick={() => handleRemoveAssessment(index)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
