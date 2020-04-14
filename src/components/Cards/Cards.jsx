import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cn from "classnames";
import styles from "./Cards.module.css";

const Cards = ({data: { confirmed, recovered, deaths, lastUpdate }}) => {
  if (!confirmed) {
    return "Chargement...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infectés
            </Typography>
            <Typography variant="h4">
                <CountUp start={0} end={confirmed.value} duration={2.5} separator="." />
            </Typography>
            <Typography color="textSecondary">{ new Date(lastUpdate).toDateString() }</Typography>
            <Typography variant="body2">
              Nombre de cas actifs du COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Rétablis
            </Typography>
            <Typography variant="h4">
                <CountUp start={0} end={recovered.value} duration={2.5} separator="." />
            </Typography>
            <Typography color="textSecondary">{ new Date(lastUpdate).toDateString() }</Typography>
            <Typography variant="body2">
              Nombre des personnes rétablies du COVID-19
            </Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cn(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Décès
            </Typography>
            <Typography variant="h4">
                <CountUp start={0} end={deaths.value} duration={2.5} separator="." />
            </Typography>
            <Typography color="textSecondary">{ new Date(lastUpdate).toDateString() }</Typography>
            <Typography variant="body2">
              Nombre de décès causés par le COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
