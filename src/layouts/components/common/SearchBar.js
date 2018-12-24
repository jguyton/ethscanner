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

    // check if search has basic requirements for account
    if (/^(0x)?[0-9a-f]{40}$/i.test(search)) {
      this.props.history.push("/address/" + search);
    } else if (search.match(/^\d+$/)) {
      this.props.history.push("/block/" + search);
    } else {
      alert("Yoooo fam, that's an incorrect address or block number")
    }

  }

  render() {
    return (
      <div className="inputbox">
        <form onSubmit={this.search}>
          <input type="text"  onChange={this.updateSearch} placeholder="enter eth address or block #"/>
          <button type="submit">
            <div>go</div>
          </button>
        </form>
      </div>

    )
  }
}

export default withRouter(SearchBar)
