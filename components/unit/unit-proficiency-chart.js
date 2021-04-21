import { Chart } from "react-google-charts";
import { ASSESSMENT_VALUES } from "../../libs/constants";
import PropTypes from "prop-types";

const COLORS = require("../../libs/theme");

export default function UnitProficiencyChart({ proficiencies }) {
  const chartData = [...proficiencies]
    .sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    })
    .map((proficiency, index) => [
      index + 1,
      Number(proficiency.beginningStep),
      Number(proficiency.nearing),
      Number(proficiency.proficient),
    ]);

  return (
    <div className="self-center w-full">
      <Chart
        className="self-center"
        width={"100%"}
        height={"500px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          [
            "unit number",
            ASSESSMENT_VALUES.levelOne.value,
            ASSESSMENT_VALUES.levelTwo.value,
            ASSESSMENT_VALUES.levelThree.value,
          ],
          ...chartData,
        ]}
        options={{
          title: "Formative Assessment Data",
          hAxis: {
            title: "Unit Number",
            gridlines: {
              color: "#ffffff",
              interval: 1,
            },
          },
          vAxis: {
            title: "Percentage Score",
            gridlines: {
              color: "#ffffff",
            },
            format: '#',
          },
          legend: {
            position: "top",
          },
          pointSize: 8,
          chartArea: {
            width: "70%",
            height: "70%",
          },
          colors: [COLORS.green, COLORS.yellow, "red"],
          curveType: "function",
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}

UnitProficiencyChart.propTypes = {
  proficiencies: PropTypes.array.isRequired,
};
