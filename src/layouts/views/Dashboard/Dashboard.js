import React, { Component } from 'react'
import API from '../../lib/api';

//components
import Wrapper from '../../components/wrapper/Wrapper'
import TransactionCard from '../../components/transactioncard/TransactionCard'
import SearchBar from '../../components/common/SearchBar'

class Dashboard extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
      transactions: [],
      search: props.match.params.address,
      page: 1,
      offset: 10,
      sort: "asc"
    };

    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
  }

  componentDidMount() {
    Promise.all([
      API.getTranactions(this.state.search, this.state.page, this.state.offset, this.state.sort)
    ]).then(results => {
      if (results[0].status === '0') {
        alert('invalid address');
        this.props.history.push("/");

      } else {
        const transactions = results[0].result;
        this.setState({
          transactions
        });
      }

    });
  }

  incrementPage() {
    if (this.state.page < 10) {
      this.setState({page: this.state.page + 1},function () {
        this.componentDidMount();
      });
    }
  }

  decrementPage() {
    if (this.state.page > 1) {
      this.setState({page: this.state.page - 1},function () {
        this.componentDidMount();
      });
    }
  }

  render() {
    return (
      <Wrapper>
        <div>
          <div style={{textAlign: 'center', margin: '5% 0 5% 0'}}>
            <SearchBar />
          </div>
          <div className="container" style={{textAlign: 'right'}}>
            Page: {this.state.page}
            <div className="filters">
              <button onClick={this.decrementPage}>&lt;</button>
              <button onClick={this.incrementPage}>&gt;</button>
            </div>
          </div>
          {this.state.transactions.map((transaction, index) => {

          return [
            <TransactionCard
              key={index}
              hash={transaction.hash}
              blockNumber={transaction.blockNumber}
              timeStamp={transaction.timeStamp}
              from={transaction.from}
              to={transaction.to}
              value={transaction.value}
            />
          ]
          })}
        </div>
      </Wrapper>
    )
  }
}

export default Dashboard
