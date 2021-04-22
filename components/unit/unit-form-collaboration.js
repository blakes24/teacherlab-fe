import QuestionInput from "./question-input";

export default function UnitFormCollaboration({ questions }) {
  return (
    questions &&
    questions.map((q) => <QuestionInput id={q.id} text={q.text} key={q.id} />)
  );
}
