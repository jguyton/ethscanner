import React, { Component } from 'react'
import API from '../../lib/api';

//components
import Wrapper from '../../components/wrapper/Wrapper'
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

      const blockinfo = results[0].result;
      const uncles = results[0].result.uncles;

      console.log(blockinfo)

      this.setState({
        uncles,
        blockinfo
      });
    });
  }



  render() {
    return (
      <Wrapper>
        <div>
          hola
        </div>
      </Wrapper>
    )
  }
}

export default BlockInfo
