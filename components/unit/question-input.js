export default function QuestionInput({ id, text, value }) {
  return (
    <div className="bg-gray-100 p-3 w-full">
      <label className="ml-1" htmlFor={id}>
        {text}
      </label>
      <textarea
        id={id}
        className="w-full h-11 rounded-md mt-2"
        value={value}
        onChange={null}
        placeholder="Type Here..."
      ></textarea>
    </div>
  );
}
