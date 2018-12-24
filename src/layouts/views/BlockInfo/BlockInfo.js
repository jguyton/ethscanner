import React, { Component } from 'react'
import API from '../../lib/api';
import {withRouter } from 'react-router-dom';

//components
import Wrapper from '../../components/wrapper/Wrapper'
import BlockCard from '../../components/blockcard/BlockCard'
class BlockInfo extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
      blockinfo: {},
      uncles: [],
      search: props.match.params.block,
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    Promise.all([
      API.getBlock(this.state.search)
    ]).then(results => {

      const blockinfo = results[0].result;
      const uncles = results[0].result.uncles;

      this.setState({
        uncles,
        blockinfo
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
    if (search.match(/^\d+$/)) {
      this.props.history.push(this.state.search);
      this.componentDidMount();
    } else {
      alert("Yoooo fam, that's an incorrect blocknumber")
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
          <BlockCard
            key={this.state.blockinfo.blockNumber}
            blockNumber={this.state.blockinfo.blockNumber}
            timeStamp={this.state.blockinfo.timeStamp}
            blockMiner={this.state.blockinfo.blockMiner}
            blockReward={this.state.blockinfo.blockReward}
            uncles={this.state.uncles}
            uncleInclusionReward={this.state.blockinfo.uncleInclusionReward}
          />
        </div>
      </Wrapper>
    )
  }
}

export default withRouter(BlockInfo)
