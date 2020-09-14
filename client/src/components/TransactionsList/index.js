import React from "react";
import Transaction from "../Transaction/index.js";

class TransactionsList extends React.Component {
  
  render() {
    const {transactions} = this.props;
    return transactions.map((transaction) => {
      return <Transaction key={transaction._id} transaction={transaction}></Transaction>;
    });
  }
}

export default TransactionsList;
