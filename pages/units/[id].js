import UnitFormNav from "../../components/unit/unit-form-nav";
import Input from "../../components/common/input";
import { getUnit } from "../../services/unit";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UnitForm() {
  const router = useRouter();
  const [unit, setUnit] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query;

    try {
      getUnit(id).then((unitData) => {
        setUnit(unitData);
      });
    } catch (e) {
      console.log(e);
    }
  }, [router.isReady]);

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 w-3/5 mx-auto relative">
        {unit && <UnitFormNav unit={unit}></UnitFormNav>}
      </div>
      <div className="col-span-7 col-start-5 mt-14">
        <div className="flex flex-col space-y-4">
          <div className="py-3 bg-gray-200 flex items-center justify-around">
            <Input label="start date" type="date" />
            <Input label="end date" type="date" />
            <Input label="review date" type="date" />
          </div>
          <div className="h-16 bg-gray-200 text-white flex items-center justify-center text-2xl font-extrabold">
            2
          </div>
          <div className="h-16 bg-gray-200 text-white flex items-center justify-center text-2xl font-extrabold">
            3
          </div>
          <div className="h-16 bg-gray-200 text-white flex items-center justify-center text-2xl font-extrabold">
            1
          </div>
        </div>
      </div>
    </div>
  );
}
