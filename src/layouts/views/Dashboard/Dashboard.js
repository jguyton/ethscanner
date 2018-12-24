import React, { Component } from 'react'
import API from '../../lib/api';
import {withRouter } from 'react-router-dom';

//components
import Wrapper from '../../components/wrapper/Wrapper'
import TransactionCard from '../../components/transactioncard/TransactionCard'
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


    this.updateSearch = this.updateSearch.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    Promise.all([
      API.getTranactions(this.state.search, this.state.page, this.state.offset, this.state.sort)
    ]).then(results => {

      const transactions = results[0].result;

      this.setState({
        transactions
      });
    });
  }

  updateSearch(event) {
    this.setState({search: event.target.value});
  }

  search() {
    const search = this.state.search;
    this.setState({search});

    // check if search has basic requirements for account
    if (/^(0x)?[0-9a-f]{40}$/i.test(search)) {
      this.props.history.push(this.state.search);
      this.componentDidMount();
    } else {
      alert("Yoooo fam, that's an incorrect address")
    }
  }

  render() {
    return (
      <Wrapper>
        <div>
          <div className="inputbox" style={{textAlign: 'center', margin: '5% 0 5% 0'}}>
          <input type="text"  onChange={this.updateSearch} placeholder="enter ethereum address or block number" name="address"/>
          <button onClick={this.search}>
            <div>go</div>
          </button>
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

export default withRouter(Dashboard)
