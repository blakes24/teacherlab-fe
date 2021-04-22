import UnitFormHeader from "../../components/unit/unit-form-header";
import UnitFormNavLink from "../../components/unit/unit-form-nav-link";
import UnitFormSection from "../../components/unit/unit-form-section";
import UnitFormDates from "../../components/unit/unit-form-dates";
import UnitFormObjectives from "../../components/unit/unit-form-objectives";
import UnitFormStandards from "../../components/unit/unit-form-standards";
import UnitFormAssessment from "../../components/unit/unit-form-assessment";
import UnitProficiencyChart from "../../components/unit/unit-proficiency-chart";
import UnitFormCollaboration from "../../components/unit/unit-form-collaboration";
import { useSelector, useDispatch } from "react-redux";
import { setUnit } from "../../store/unit-slicer";
import { getUnit } from "../../services/unit";
import { getQuestions } from "../../services/question";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const UNIT_FORM_SECTIONS = {
  planning: "planning",
  collaboration: "collaboration",
};

export default function UnitForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const unit = useSelector((state) => state.unit);
  const {
    details: {
      assessments: { formative },
    },
  } = unit;
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [activeSection, setActiveSection] = useState(UNIT_FORM_SECTIONS.planning);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (!router.isReady || !isAuthenticated) return;
    const { id } = router.query;

    try {
      getUnit(id).then((unitData) => {
        dispatch(setUnit(unitData));
        getQuestions(unitData.subjectId).then((questionData) => {
          setQuestions(questionData);
        });
      });
    } catch (e) {
      console.log(e);
    }
  }, [router.isReady]);

  return (
    <>
      {isAuthenticated && (
        <div className="container mx-auto xl:px-24 lg:px-0 sm:px-0 py-14">
          <div className="flex flex-col space-y-6">
            <UnitFormHeader unit={unit} />

            <ul className="text-2xl font-light divide-x divide-black">
              <UnitFormNavLink
                className="pr-3"
                label={UNIT_FORM_SECTIONS.planning}
                setActiveSection={() =>
                  setActiveSection(UNIT_FORM_SECTIONS.planning)
                }
                active={activeSection === UNIT_FORM_SECTIONS.planning}
              />
              <UnitFormNavLink
                className="pl-3"
                label={UNIT_FORM_SECTIONS.collaboration}
                setActiveSection={() =>
                  setActiveSection(UNIT_FORM_SECTIONS.collaboration)
                }
                active={activeSection === UNIT_FORM_SECTIONS.collaboration}
              />
            </ul>

            {activeSection === UNIT_FORM_SECTIONS.planning && (
              <>
                <UnitFormSection showSaveButton={false}>
                  <UnitFormDates />
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
              </>
            )}

            {activeSection === UNIT_FORM_SECTIONS.collaboration && (
              <>
                <UnitFormSection showSaveButton={false}>
                  <UnitProficiencyChart proficiencies={formative} />
                </UnitFormSection>
                <UnitFormSection tabText="Collaboration">
                  <UnitFormCollaboration questions={questions} />
                </UnitFormSection>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
