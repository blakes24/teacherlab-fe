import Input from "../common/input";

export default function UnitCard() {
  return (
    <div className="bg-blue w-72 mx-auto p-7 pt-4">
      <form className="grid grid-cols-1 gap-3">
        <Input type="number" label="unit number"></Input>
        <Input type="text" label="unit title"></Input>
        <Input type="date" label="start date"></Input>
        <Input type="date" label="end date"></Input>
        <Input type="date" label="review date"></Input>
      </form>
    </div>
  );
}
