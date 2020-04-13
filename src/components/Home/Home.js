import React from "react";
import logo from "../assets/covid-19-logo.png";

const Home = () => {
  return (
    <div>
      <span className="left">
        <img src={logo} alt="logo application" />
      </span>

      <p>
        Le Coronavirus se propage, malheureusement, dans le monde entier. J’ai
        développé cette application afin de pouvoir aider à diffuser la
        sensibilisation en visualisant les données. Les données sont extraites
        de l'API et les statistiques ainsi que les graphiques sont affichés sous
        forme des cartes.
      </p>
    </div>
  );
};

export default Home;
