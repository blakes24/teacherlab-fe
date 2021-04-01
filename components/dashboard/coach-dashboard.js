import DashboardColumn from "./dashboard-column";
import Input from "../common/input";
import { getSubjects } from "../../services/user";
import { SUBJECTS } from "../../libs/constants";
import { useEffect, useState } from "react";

export default function CoachDashboard() {
  const [subjectsByGrade, setSubjectsByGrade] = useState([]);
  const [allSubjects, setAllSubjects] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState(5);

  function getSubjectsByGrade(allSubjects) {
    const subjects = allSubjects.filter(
      (subject) => Number(subject.grade) === selectedGrade
    );

    return subjects;
  }

  useEffect(async () => {
    const res = await getSubjects();
    setAllSubjects(res);
    setSubjectsByGrade(getSubjectsByGrade(res));
  }, []);

  // unitCardForm
  //  number input with a min and max
  //  text input
  //  date input

  return (
    <div className="grid grid-flow-col grid-cols-3 divide-x min-h-screen -mt-16 pt-16">
      <DashboardColumn subject={SUBJECTS.ela}></DashboardColumn>
      <DashboardColumn subject={SUBJECTS.math}></DashboardColumn>
      <DashboardColumn subject={SUBJECTS.science}></DashboardColumn>
    </div>
  );
}
