import { useSelector, useDispatch } from "react-redux";
import { setReflection } from "../../store/unit-slicer";

export default function UnitFormReflection() {
  const dispatch = useDispatch();
  const reflection = useSelector(
    (state) => state.unit.collaboration.reflection
  );

  return (
    <textarea
      className="w-full h-60 max-h-60"
      value={reflection}
      onChange={(event) => dispatch(setReflection(event.target.value))}
    ></textarea>
  );
}
