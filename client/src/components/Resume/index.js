import React from "react";

class Resume extends React.Component {
  state = {
    total_tipo_mais: 0,
    total_tipo_menos: 0,
    balanco: 0,
    total: 0,
  };

  generateResume(transactions) {
    let contagemReceita = 0;
    let contagemDespesa = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === "+") {
        contagemReceita = contagemReceita + transaction.value;
      } else {
        contagemDespesa = contagemDespesa + transaction.value;
      }
    });
    this.setState({
      total: transactions.length,
      total_tipo_mais: contagemReceita,
      total_tipo_menos: contagemDespesa,
      balanco: contagemReceita - contagemDespesa,
    });
  }

  componentDidMount() {
    const { transactions } = this.props;
    this.generateResume(transactions);
  }
  render() {
    return (
      <>
        <h1>{this.state.total}</h1>
        <h1>{this.state.total_tipo_mais}</h1>
        <h1>{this.state.total_tipo_menos}</h1>
        <h1>{this.state.balanco}</h1>
      </>
    );
  }
}

export default Resume;
