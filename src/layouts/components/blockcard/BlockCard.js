import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';

import './blockcard.css'
//components

class BlockCard extends Component {
  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
    }


  }

  render() {
    return(
      <Grid>
        <div className="blockCard">
          <Row>
            <Col xs={12} md={3} lg={3}>
              <p>Block Number: </p>
            </Col>
            <Col xs={12} md={9} lg={9}>
              <p>{this.props.blockNumber}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3} lg={3}>
              <p>Timestamp: </p>
            </Col>
            <Col xs={12} md={9} lg={9}>
              <p>{this.props.timeStamp}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3} lg={3}>
              <p>Block Miner: </p>
            </Col>
            <Col xs={12} md={9} lg={9}>
              <p>{this.props.blockMiner}</p>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={3} lg={3}>
              <p>Block Reward: </p>
            </Col>
            <Col xs={12} md={9} lg={9}>
              <p>{this.props.blockReward}</p>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={3} lg={3}>
              <p>Uncles: </p>
            </Col>
            <Col xs={12} md={9} lg={9}>
              {this.props.uncles.map((uncle) => {
              return [
                <div style={{lineHeight: '7px', paddingBottom: '10px'}}>
                  <p>Miner: {uncle.miner}</p>
                  <p>Uncle Position: {uncle.unclePosition}</p>
                  <p>Block Reward: {uncle.blockreward}</p>
                </div>
              ]
              })}
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={3} lg={3}>
              <p>Uncles Inclusion Reward: </p>
            </Col>
            <Col xs={12} md={9} lg={9}>
              <p>{this.props.uncleInclusionReward}</p>
            </Col>
          </Row>
        </div>
      </Grid>
    )
  }
}

export default BlockCard

/*

*/
