import React, { Component } from 'react'
import Wrapper from '../../components/wrapper/Wrapper'

class NotFound extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
    };
  }

  render() {
    return (
      <Wrapper>
        <div style={{height: '80%'}}>
          <section className='NotFound'>
            <a href="/" className='NotFoundBtn'><button>Go to home</button></a>
          </section>
        </div>
      </Wrapper>
    )
  }
}

export default NotFound
