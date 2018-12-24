import React, { Component } from 'react'
import API from '../../lib/api';

//components
import Wrapper from '../../components/wrapper/Wrapper'
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
  }

  componentDidMount() {
    Promise.all([
      API.getTranactions(this.state.search, this.state.page, this.state.offset, this.state.sort)
    ]).then(results => {

      const transactions = results[0].result;
      console.log(transactions);
      this.setState({
        transactions
      });
    });
  }


  render() {
    return (
      <Wrapper>
        <div>
          GANG
        </div>
      </Wrapper>
    )
  }
}

export default Dashboard
