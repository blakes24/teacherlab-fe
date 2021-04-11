import { useSelector, useDispatch } from "react-redux";
import { setObjectives } from "../../store/unit-slicer";

export default function UnitFormObjectives() {
  const dispatch = useDispatch();
  const objectives = useSelector((state) => state.unit.details.objectives);

  return (
    <textarea
      className="w-full h-60 max-h-60"
      value={objectives}
      onChange={(event) => dispatch(setObjectives(event.target.value))}
    ></textarea>
  );
}
