import UnitFormHeader from "../../components/unit/unit-form-header";
import UnitFormSection from "../../components/unit/unit-form-section";
import UnitFormDates from "../../components/unit/unit-form-dates";
import UnitFormObjectives from "../../components/unit/unit-form-objectives";
import UnitFormStandards from "../../components/unit/unit-form-standards";
import UnitFormAssessment from "../../components/unit/unit-form-assessment";
import { useSelector, useDispatch } from "react-redux";
import { setUnit, updateUnitThunk } from "../../store/unit-slicer";
import { getUnit } from "../../services/unit";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function UnitForm() {
  const unit = useSelector((state) => state.unit);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady || !isAuthenticated) return;
    const { id } = router.query;

    try {
      getUnit(id).then((unitData) => {
        dispatch(setUnit(unitData));
      });
    } catch (e) {
      console.log(e);
    }
  }, [router.isReady]);

  const handleUnitUpdate = async (unitId) => {
    try {
      await dispatch(updateUnitThunk(unitId));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {isAuthenticated && (
        <div className="container mx-auto xl:px-24 lg:px-0 sm:px-0 py-14">
          <div className="flex flex-col space-y-6">
            <UnitFormHeader unit={unit} />

            <UnitFormSection showSaveButton={false}>
              <UnitFormDates handleUpdate={() => handleUnitUpdate(unit.id)} />
            </UnitFormSection>

            <UnitFormSection tabText="Objectives">
              <UnitFormObjectives />
            </UnitFormSection>

            <UnitFormSection tabText="Standards">
              <UnitFormStandards setId={unit.setId}></UnitFormStandards>
            </UnitFormSection>

            <UnitFormSection tabText="Formative Assessment">
              <UnitFormAssessment assessmentType="formative" />
            </UnitFormSection>

            <UnitFormSection tabText="Summative Assessment">
              <UnitFormAssessment assessmentType="summative" />
            </UnitFormSection>
          </div>
        </div>
      )}
    </>
  );
}
