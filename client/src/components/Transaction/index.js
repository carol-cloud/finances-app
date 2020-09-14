import React from "react";
import axios from "axios";

class Transaction extends React.Component {
  handleDelete(event) {
    event.preventDefault();
    const { transaction } = this.props;
    axios
      .delete("http://localhost:3001/api/transaction/" + transaction._id)
      .then((res) => {
        // const transactions = res.data;
        // this.setState({ transactions });
      });
  }

  render() {
    const { transaction } = this.props;
    return (
      <>
        <ul className="collection with-header">
          <li
            style={{
              backgroundColor: transaction.type === "+" ? "green" : "red",
            }}
            className="collection-item"
          >
            <div>
              {transaction.category}
              <br />
              {transaction.description}
              <div className="secondary-content">
                R$ {transaction.value}
                <i
                  style={{ cursor: "pointer" }}
                  className="tiny material-icons"
                >
                  create
                </i>
                <i
                  style={{ cursor: "pointer" }}
                  onClick={this.handleDelete.bind(this)}
                  className="tiny material-icons"
                >
                  delete
                </i>
              </div>
            </div>
          </li>
        </ul>
      </>
    );
  }
}

export default Transaction;
