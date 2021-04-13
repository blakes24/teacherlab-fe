import Button from "../common/button";
import PropTypes from "prop-types";
import { updateUnitThunk } from "../../store/unit-slicer";
import { useDispatch } from "react-redux";

export default function UnitFormNav({ unit }) {
  const dispatch = useDispatch();

  const handleUnitUpdate = async (unitId) => {
    try {
      await dispatch(updateUnitThunk(unitId));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="mt-14 sticky" style={{ top: "117px" }}>
        <div className="bg-blue p-7 pt-4">
          <div className="flex flex-col justify-between items-center text-white">
            <div className="rounded-full bg-yellow w-24 h-24 text-4xl font-light flex justify-center self-center">
              <div className="self-center text-black">U{unit.number}</div>
            </div>
            <div className="font-semibold text-lg mt-4">{unit.subjectName}</div>
            <div className="mt-2 mb-4 tracking-wider font-light">
              {unit.title}
            </div>

            <div className="border-t w-full text-center">
              <div className="font-light text-lg mb-2 mt-4">link 1</div>
              <div className="font-light text-lg mb-2">link 2</div>
              <div className="font-light text-lg mb-2">link 3</div>
              <div className="font-light text-lg mb-2">link 4</div>
              <div className="font-light text-lg mb-2">link 5</div>
              <div className="font-light text-lg mb-2">link 6</div>
            </div>
          </div>
        </div>
        <Button
          full
          classNames="mt-4"
          text="Save"
          size="md"
          rounded
          onClick={() => handleUnitUpdate(unit.id)}
        />
      </div>
    </>
  );
}

UnitFormNav.propTypes = {
  unit: PropTypes.object.isRequired,
};
