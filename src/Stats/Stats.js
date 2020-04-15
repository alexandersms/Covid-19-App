import React from "react";
import { Cards, Chart, Country } from "../components";
import { Link } from "react-router-dom";
import styles from "./Stats.module.css";
import { fetchData } from "../api";
import logoCorona from "../assets/covid-19-logo.png";

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({
      data
    });
  }

  handleChangeCountry = async country => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Link to="/">
          <img
            className={styles.image}
            src={logoCorona}
            alt="logo Covid-19 Tracking application"
          />
        </Link>

        <Cards data={data} />
        <Country handleChangeCountry={this.handleChangeCountry} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
