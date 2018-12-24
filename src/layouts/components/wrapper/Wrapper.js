import React, { Children, Component } from 'react'
//components
import Footer from './Footer'
import Header from './Header'


class Wrapper extends Component {

  constructor(props, context) {
    super(props)

    /* local state variables */
    this.state = {
    }

  }

  componentDidMount() {
    //scroll to top on all pages
    window.scrollTo(0,0)
  }

  render() {
      return(
        <div>
          <Header />
            {Children.only(this.props.children)}
          <Footer />
        </div>
     );
  }
}

export default Wrapper
