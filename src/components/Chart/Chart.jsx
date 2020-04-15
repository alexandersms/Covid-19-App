import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data: {confirmed, recovered, deaths}, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, []);

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

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infectés", "Rétablis", "Décès"],
        datasets: [
          {
            label: "Personnes",
            backgroundColor: [
              "rgba(39, 60, 117,1.0)",
              "rgba(22, 160, 133,1.0)",
              "rgba(255, 56, 56,1.0)"
            ],
            data: [confirmed.value, recovered.value, deaths.value]
          }
        ]
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: `Situation actuelle (en au, aux) ${country}`
        }
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
    {country ? barChart : lineChart}
    </div>
  )
};

export default Chart;
