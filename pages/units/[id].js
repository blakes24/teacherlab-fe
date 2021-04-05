import UnitFormNav from "../../components/unit/unit-form-nav";
import UnitFormSection from "../../components/unit/unit-form-section";
import Input from "../../components/common/input";
import { useSelector, useDispatch } from "react-redux";
import {
  setStartDate,
  setEndDate,
  setReviewDate,
  setUnit,
  selectUnit,
  selectStartDate,
  selectEndDate,
  selectReviewDate,
} from "../../store/unitSlicer";
import { getUnit } from "../../services/unit";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UnitForm() {
  const unit = useSelector(selectUnit);
  const startDate = useSelector(selectStartDate);
  const endDate = useSelector(selectEndDate);
  const reviewDate = useSelector(selectReviewDate);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const { id } = router.query;

    try {
      getUnit(id).then((unitData) => {
        dispatch(setUnit(unitData));
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
          <UnitFormSection>
            <Input
              label="start date"
              type="date"
              value={startDate}
              onChange={(event) => dispatch(setStartDate(event.target.value))}
            />
            <Input
              label="end date"
              type="date"
              value={endDate}
              onChange={(event) => dispatch(setEndDate(event.target.value))}
            />
            <Input
              label="review date"
              type="date"
              value={reviewDate}
              onChange={(event) => dispatch(setReviewDate(event.target.value))}
            />
          </UnitFormSection>
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
