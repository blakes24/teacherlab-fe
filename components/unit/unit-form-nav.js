import PropTypes from "prop-types";

export default function UnitFormNav({ unit }) {
  return (
    <div className="bg-blue p-7 pt-4 mt-14 sticky" style={{ top: "117px" }}>
      <div className="flex flex-col justify-between items-center text-white">
        <div className="rounded-full bg-yellow-500 w-24 h-24 text-4xl font-light flex justify-center self-center">
          <div className="self-center text-black">U{unit.number}</div>
        </div>
        <div className="font-semibold text-lg mt-4">ELA</div>
        <div className="mt-2 mb-4 tracking-wider font-light">{unit.title}</div>

        <div className="border-t w-full text-center">
          <div className="font-light text-lg mb-2 mt-4">link 1</div>
          <div className="font-light text-lg mb-2">link 2</div>
          <div className="font-light text-lg mb-2">link 3</div>
          <div className="font-light text-lg mb-2">link 4</div>
          <div className="font-light text-lg mb-2">link 5</div>
          <div className="font-light text-lg mb-2">link 6</div>
        </div>
      </div>
    </div>
  );
}

UnitFormNav.propTypes = {
  unit: PropTypes.object.isRequired,
}
