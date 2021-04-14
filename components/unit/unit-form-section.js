import Button from "../../components/common/button";
import { useSelector, useDispatch } from "react-redux";

import { updateUnitThunk } from "../../store/unit-slicer";

import PropTypes from "prop-types";

export default function UnitFormSection({
  children,
  tabText,
  showSaveButton = true,
}) {
  const dispatch = useDispatch();
  const unitId = useSelector((state) => state.unit.id);

  const handleUnitUpdate = async () => {
    try {
      await dispatch(updateUnitThunk(unitId));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div>
        {tabText && (
          <div className="bg-blue inline-block px-4 py-1 text-lg text-white font-light">
            {tabText}
          </div>
        )}
        <div className="p-6 bg-gray-200 flex flex-col items-center justify-between space-y-4">
          {children}
          {showSaveButton && (
            <Button
              text="Save"
              size="md"
              classNames="px-14 self-end"
              rounded
              color="secondary"
              onClick={handleUnitUpdate}
            />
          )}
        </div>
      </div>
    </>
  );
}

UnitFormSection.propTypes = {
  tabText: PropTypes.string,
  showSaveButton: PropTypes.bool,
};
