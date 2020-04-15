import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import logo from "../../assets/covid-19-logo.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>COVID-19 Tracker App - Home</title>
      </Helmet>
      <span>
        <img className={styles.image} src={logo} alt="logo application" />
      </span>

      <span className={styles.text}>
        <p>
          Le Coronavirus se propage, malheureusement, dans le monde entier. J’ai
          développé cette application afin de pouvoir aider à diffuser la
          sensibilisation en visualisant les données. Les données sont extraites
          de l'API et les statistiques ainsi que les graphiques sont affichés
          sous forme des cartes.
        </p>

        <p>Pour vous protéger et protéger les autres, restez chez vous.</p>

        <p>
          <Link to="/statistics">Voir les statistiques du Virus</Link>
        </p>

        <p>
          &copy;
          <a href="http://alexsimisi.netlify.com/" target="new">
            Alex SIMISI NTA
          </a>
        </p>
      </span>
    </div>
  );
};

export default Home;
