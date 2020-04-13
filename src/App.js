import React from "react";
import { Cards, Chart, Country } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

class App extends React.Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({
      data
    })
  }
  

  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <Country />
        <Chart />
      </div>
    );
  }
}

export default App;
