import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';

import './txncard.css'
//components

class TransactionCard extends Component {
  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
    }


  }

  render() {
    return(
      <div>
        <Grid>
          <div className="transactionCard">
            <Row>
              <Col xs={12} md={12} lg={12}>
                <p>Hash: <a href={'https://etherscan.io/tx/' + this.props.hash} target='_blank' rel="noopener noreferrer"> {this.props.hash}</a></p>
              </Col>
            </Row>
            <Row>
              <Col xs={6} sm={6} md={5} lg={5}>
                <p>Block: &nbsp;
                  <a href={"/block/" + this.props.blockNumber}>
                    {this.props.blockNumber}
                  </a>
                </p>
              </Col>
              <Col xs={6} sm={6} md={5} lg={5}>
                <p>Time Stamp: {this.props.timeStamp}</p>
              </Col>
              <Col xs={12} md={2} lg={2}>
              </Col>
            </Row>
            <Row>
              <Col xs={6} sm={6} md={5} lg={5}>
                <p>From: &nbsp;
                  <a href={"/address/" + this.props.from}>
                    {this.props.from}
                  </a>
                </p>
              </Col>
              <Col xs={6} sm={6} md={5} lg={5}>
                <p>To: &nbsp;
                  <a href={"/address/" + this.props.to}>
                    {this.props.to}
                  </a>
                </p>
              </Col>
              <Col xs={12} md={2} lg={2}>
                <p>Value: {this.props.value / (10**18)} ETH</p>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>
    )
  }
}

export default TransactionCard

/*

*/
