import React, {Component} from 'react'
//components
import Wrapper from '../../components/wrapper/Wrapper'
import SearchBar from '../../components/common/SearchBar'
import "./home.css"
class Home extends Component {

  constructor(props, context) {
    super(props)

    this.state = {
      search: ''
    }

  }

  render() {
    return (
      <Wrapper>
        <div className="landing">
          <h2 style={{textTransform: 'capitalize', fontSize: 35, fontWeight: '400'}}> Ethereum Scanner </h2>
          <SearchBar />
          <p> Example: 0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a </p>
        </div>
      </Wrapper>
    )
  }
}

export default Home
