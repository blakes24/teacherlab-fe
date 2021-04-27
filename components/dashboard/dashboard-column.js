import UnitCardContainer from "../unit/unit-card-container";
import Button from "../common/button";
import { SUBJECTS } from "../../libs/constants";
import PropTypes from "prop-types";
import { useState } from "react";
import cx from "classnames";

export default function DashboardColumn({
  user,
  subject,
  subjectName,
  imgClassName,
}) {
  const [showUnitCard, setShowUnitCard] = useState(false);
  let subjectHasUnit;

  if (subject) {
    subjectHasUnit = subject.units.length > 0;
  }

  function toggleUnitCard(val) {
    setShowUnitCard(val);
  }

  return (
    <>
      <div className="flex flex-col justify-center">
        {showUnitCard || subjectHasUnit ? (
          <UnitCardContainer
            subject={subject}
            closeAction={toggleUnitCard.bind({}, false)}
            showUnitCard={subjectHasUnit}
            user={user}
          ></UnitCardContainer>
        ) : (
          <>
            <div
              className={cx(
                imgClassName,
                "w-40 h-40 bg-center bg-contain bg-no-repeat bg-blue rounded-full self-center"
              )}
            ></div>

            <div className="text-center text-sm mt-4 w-80 self-center">
              You don’t have any {subjectName} units yet!{" "}
              {user.admin && `Add an ${subjectName} unit to get started.`}
            </div>

            {user.admin && (
              <Button
                onClick={toggleUnitCard.bind({}, true)}
                text={`Add ${subjectName} Unit`}
                classNames="mt-36 w-7/12 self-center"
                size="md"
                type="button"
              ></Button>
            )}
          </>
        )}
      </div>
    </>
  );
}

DashboardColumn.propTypes = {
  subjectName: PropTypes.oneOf(Object.values(SUBJECTS)).isRequired,
  subject: PropTypes.object,
  user: PropTypes.object,
  imgClassName: PropTypes.string,
};
