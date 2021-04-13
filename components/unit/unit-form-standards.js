import Button from "../common/button";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getStandardsBySetId } from "../../services/standard";
import Select, { components } from "react-select";
import { setStandards } from "../../store/unit-slicer";

const CODE_DESCRIPTION_DELIMITER = " - ";

const MultiValue = (props) => {
  // I'm replacing react-selects `MultiValue` component to render
  // only a standard code in the input when an option is selected
  // from the dropdown
  // https://react-select.com/components#replaceable-components
  return <components.MultiValue {...props} children={props.data.value} />;
};

export default function UnitFormStandards({ setId }) {
  const dispatch = useDispatch();
  const [standardsPayload, setStandardsPayload] = useState([]);
  const [selectedStandards, setSelectedStandards] = useState([]);
  const standards = useSelector((state) => state.unit.details.standards);

  function handleSelectedStandards() {
    // react-select expects a {value, label} data structure, here
    // we format back to original shape to keep consistent with
    // API response
    dispatch(
      setStandards(
        selectedStandards.map((standard) => ({
          code: standard.value,
          description: standard.label.split(CODE_DESCRIPTION_DELIMITER)[1],
        }))
      )
    );
    setSelectedStandards([]);
  }

  useEffect(() => {
    if (!setId) return;

    getStandardsBySetId(setId).then((payload) => {
      setStandardsPayload(payload);
    });
  }, [setId]);

  return (
    <>
      <div className="w-full">
        <Select
          instanceId="standards-select"
          components={{ MultiValue }}
          options={standardsPayload.map((standard) => ({
            value: standard.code,
            label: `${standard.code}${CODE_DESCRIPTION_DELIMITER}${standard.description}`,
          }))}
          closeMenuOnSelect={false}
          onChange={(value) => setSelectedStandards(value)}
          value={selectedStandards}
          isMulti
        />
        <div className="bg-white mb-4 p-6 h-60 overflow-scroll">
          {standards &&
            standards.map((standard, index) => (
              <div key={index}>{standard.code}</div>
            ))}
        </div>
        <div className="flex justify-end">
          <Button
            text="Add Standards"
            size="md"
            onClick={handleSelectedStandards}
          />
        </div>
      </div>
    </>
  );
}
