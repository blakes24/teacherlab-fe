import DashboardColumn from "./dashboard-column";
import Input from "../common/input";
import { getSubjects } from "../../services/user";
import { SUBJECTS } from "../../libs/constants";
import { useEffect, useState } from "react";

export default function CoachDashboard() {
  const [subjectsByGrade, setSubjectsByGrade] = useState([]);
  const [allSubjects, setAllSubjects] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState("5");

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
    const res = await getSubjects();
    setAllSubjects(res);
    setSubjectsByGrade(getSubjectsByGrade(res));
  }, []);

  return (
    <>
      <div className="grid grid-flow-col grid-cols-3 divide-x min-h-screen -mt-16 pt-16">
        <DashboardColumn
          subject={getSubjectData(SUBJECTS.ela)}
          subjectName={SUBJECTS.ela}
        ></DashboardColumn>
        <DashboardColumn
          subject={getSubjectData(SUBJECTS.math)}
          subjectName={SUBJECTS.math}
        ></DashboardColumn>
        <DashboardColumn
          subject={getSubjectData(SUBJECTS.science)}
          subjectName={SUBJECTS.science}
        ></DashboardColumn>
      </div>
    </>
  );
}
