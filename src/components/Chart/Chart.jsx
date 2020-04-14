import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  });

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infectés",
            borderColor: "rgba(39, 60, 117,1.0)",
            fill: true
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Décès",
            borderColor: "rgba(255, 56, 56,1.0)",
            backgroundColor: "rgba(255, 56, 56,0.5)",
            fill: true
          }
        ]
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
