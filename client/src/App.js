import React from "react";
import TransactionsList from "./components/TransactionsList/index.js";
import Resume from "./components/Resume/index.js";
import axios from "axios";
import FilterByDescription from "./components/FilterByDescription/index.js";
import FlavorForm from "./components/FilterByPeriod/index.js";
class App extends React.Component {
  state = {
    transactions: [],
    transactionsFiltered: [],
  };

  handleChange(event) {
    const search = event.target.value;
    const transactionsFiltered = this.state.transactions.filter(
      (transaction) => {
        return transaction.description.includes(search);
      }
    );
    this.setState({ transactionsFiltered: transactionsFiltered });
  }

  handleChange2(event) {
    console.log(event);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/transaction?period=2021-08")
      .then((res) => {
        const transactions = res.data;
        this.setState({
          transactions: transactions,
          transactionsFiltered: transactions,
        });
      });
  }
  render() {
    return (
      <>
        <FlavorForm handleChange={this.handleChange2.bind(this)}></FlavorForm>
        {this.state.transactions.length > 0 && (
          <Resume transactions={this.state.transactionsFiltered}></Resume>
        )}
        <FilterByDescription
          handleChange={this.handleChange.bind(this)}
        ></FilterByDescription>
        <TransactionsList
          transactions={this.state.transactionsFiltered}
        ></TransactionsList>
      </>
    );
  }
}

export default App;
