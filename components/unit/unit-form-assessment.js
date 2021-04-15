import Input from "../common/input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import AssessmentTableRow from "./assessment-table-row";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssessment } from "../../store/unit-slicer";
import ReactTooltip from "react-tooltip";
import { ASSESSMENT_VALUES } from "../../libs/constants";
import PropTypes from "prop-types";

export default function UnitFormAssessment({ assessmentType }) {
  const dispatch = useDispatch();
  const { [assessmentType]: assessments } = useSelector(
    (state) => state.unit.details.assessments
  );
  const [assessmentName, setAssessmentName] = useState();
  const [assessmentDate, setAssessmentDate] = useState();
  const [renderToolTip, setRenderToolTip] = useState(false);
  const {
    levelOne: { field: beginningStepField, value: beginningStepValue },
    levelTwo: { field: nearingField, value: nearingValue },
    levelThree: { field: proficientField, value: proficientValue },
  } = ASSESSMENT_VALUES;

  useEffect(() => {
    setRenderToolTip(true);
  }, []);

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

      <div className="h-64 overflow-auto">
        {renderToolTip && (
          <>
            <ReactTooltip id={beginningStepField} />
            <ReactTooltip id={nearingField} />
            <ReactTooltip id={proficientField} />
          </>
        )}
        <table
          className="table-fixed w-full mt-3 text-sm"
          style={{ width: "99.9%" }}
        >
          <thead className="pb-2">
            <tr className="h-10">
              <td className="w-12"></td>
              <td className="w-3/5"></td>
              <td
                className="text-center font-semibold cursor-pointer"
                style={{ width: "7%" }}
              >
                <div
                  data-tip={beginningStepValue}
                  data-for={beginningStepField}
                  className="rounded-full border-2 border-black w-6 mx-auto"
                >
                  1
                </div>
              </td>
              <td
                className="text-center font-semibold cursor-pointer"
                style={{ width: "7%" }}
              >
                <div
                  data-tip={nearingValue}
                  data-for={nearingField}
                  className="rounded-full border-2 border-black w-6 mx-auto"
                >
                  2
                </div>
              </td>
              <td
                className="text-center font-semibold cursor-pointer"
                style={{ width: "7%" }}
              >
                <div
                  data-tip={proficientValue}
                  data-for={proficientField}
                  className="rounded-full border-2 border-black w-6 mx-auto"
                >
                  3
                </div>
              </td>
              <td style={{ width: "123px" }}></td>
              <td className="w-1/12 "></td>
            </tr>
          </thead>
          <tbody>
            {assessments &&
              assessments.map((assessment, index) => (
                <AssessmentTableRow
                  key={index}
                  assessment={assessment}
                  index={index}
                  assessmentType={assessmentType}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

UnitFormAssessment.propTypes = {
  assessmentType: PropTypes.oneOf(["summative", "formative"]).isRequired,
};
