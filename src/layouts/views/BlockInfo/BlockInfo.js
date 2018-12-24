import React, { Component } from 'react'
import API from '../../lib/api';

//components
import Wrapper from '../../components/wrapper/Wrapper'
import BlockCard from '../../components/blockcard/BlockCard'
import SearchBar from '../../components/common/SearchBar'

class BlockInfo extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
      blockinfo: {},
      uncles: [],
      search: props.match.params.block,
    };
  }

  componentDidMount() {
    Promise.all([
      API.getBlock(this.state.search)
    ]).then(results => {

      if (results[0].status === '0') {
        alert('invalid address');
        this.props.history.push("/");

      } else {
        const blockinfo = results[0].result;
        const uncles = results[0].result.uncles;
        this.setState({
          uncles,
          blockinfo
        });
      }


    });
  }

  render() {
    return (
      <Wrapper>
        <div>
          <div style={{textAlign: 'center', margin: '5% 0 5% 0'}}>
            <SearchBar />
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

export default BlockInfo
