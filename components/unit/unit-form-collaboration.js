import QuestionInput from "./question-input";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

export default function UnitFormCollaboration({ questions }) {
  const answers = useSelector((state) => state.unit.collaboration.answers);
  
  return (
    questions &&
    questions.map((q) => (
      <QuestionInput
        id={q.id}
        label={q.text}
        value={answers[q.id] || ""}
        key={q.id}
      />
    ))
  );
}

UnitFormCollaboration.propTypes = {
  questions: PropTypes.array,
};
