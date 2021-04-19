import DashboardColumn from "./dashboard-column";
import PropTypes from "prop-types";
import { getSubjects } from "../../services/user";
import { useSelector } from "react-redux";
import { SUBJECTS } from "../../libs/constants";
import { useEffect, useState } from "react";

export default function Dashboard({ user }) {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [subjectsByGrade, setSubjectsByGrade] = useState([]);
  const [selectedGrade] = useState("5");

  function getSubjectsByGrade(allSubjects) {
    const subjects = allSubjects.filter(
      (subject) => subject.grade === selectedGrade
    );

    return subjects;
  }

  function getSubjectData(subject) {
    const subjectName = subject.toUpperCase();
    return subjectsByGrade.filter((subject) => subject.name === subjectName)[0];
  }

  useEffect(async () => {
    if (!isAuthenticated) {
      return;
    }

    const res = await getSubjects();
    setSubjectsByGrade(getSubjectsByGrade(res));
  }, []);

  return (
    <>
      {isAuthenticated && (
        <div className="grid grid-flow-col grid-cols-3 divide-x min-h-screen -mt-16 pt-16">
          <DashboardColumn
            subject={getSubjectData(SUBJECTS.ela)}
            subjectName={SUBJECTS.ela}
            user={user}
          ></DashboardColumn>
          <DashboardColumn
            subject={getSubjectData(SUBJECTS.math)}
            subjectName={SUBJECTS.math}
            user={user}
          ></DashboardColumn>
          <DashboardColumn
            subject={getSubjectData(SUBJECTS.science)}
            subjectName={SUBJECTS.science}
            user={user}
          ></DashboardColumn>
        </div>
      )}
    </>
  );
}

Dashboard.propTypes = {
  user: PropTypes.object,
};
