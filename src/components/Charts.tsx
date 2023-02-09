import { Box } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";

type Props = {};

const Charts = (props: Props) => {
  const { userStore } = useStore();

  console.log("data", [
    ["Chrome", userStore.numberOfActiveUsers()],
    ["Edge", userStore.numberOfInactiveUsers()],
  ]);
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
    },
    title: {
      text: "Active Vs. Inactive",
      align: "center",
      verticalAlign: "middle",
      y: 150,
      x: 25,
    },

    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: "bold",
            color: "white",
          },
        },
        startAngle: -90,
        endAngle: 90,
        center: ["50%", "75%"],
        size: "110%",
      },
    },
    series: [
      {
        type: "pie",
        name: "",
        innerSize: "50%",
        data: [
          ["Active", userStore.numberOfActiveUsers()],
          ["Inactive", userStore.numberOfInactiveUsers()],
        ],
      },
    ],
  };
  return (
    <Box p={5}>
      {userStore.users.length > 0 && (
        <HighchartsReact highcharts={Highcharts} options={options} />
      )}
    </Box>
  );
};

export default observer(Charts);
