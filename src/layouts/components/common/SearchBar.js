import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

class SearchBar extends Component {

  constructor(props, context) {
    super(props)

    this.state = {
      search: ''
    }

    this.updateSearch = this.updateSearch.bind(this);
    this.search = this.search.bind(this);
  }


  updateSearch(event) {
    this.setState({search: event.target.value});
  }

  search() {
    const search = this.state.search;
    this.setState({search});
    console.log("search= " + search);

    // check if search has basic requirements for account
    if (/^(0x)?[0-9a-f]{40}$/i.test(search)) {
      console.log("hash")
      this.props.history.push("address/" + this.state.search);
    } else if (search.match(/^\d+$/)) {
      this.props.history.push("block/" + this.state.search)
      console.log("block number")
    } else {
      alert("Yoooo fam, that's an incorrect address or block number")
    }

  }

  render() {
    return (
      <div className="inputbox">
        <input type="text"  onChange={this.updateSearch} placeholder="enter ethereum address or block number" name="address"/>
        <button onClick={this.search}>
          <div>go</div>
        </button>
      </div>

    )
  }
}

export default withRouter(SearchBar)
