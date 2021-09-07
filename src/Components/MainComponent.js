import React, { Component } from "react";
import "./../App.css";
import Post from "./Post/Post";
import Header from "./Header/Header";
import Favorites from "./Favorites/Favorites";
import Archive from "./Archive/Archive";
import AddPost from "./AddPost/AddPost";
import { connect } from "react-redux";
class MainComponent extends Component {
  state = {
    search: "",
  };
  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  };
  render() {
    const { search } = this.state;
    const { tabValue } = this.props;
    return (
      <div className="App">
        <Header handleSearch={this.handleSearch} />
        {tabValue.value === 0 ? (
          <Post search={search} />
        ) : tabValue.value === 1 ? (
          <Favorites search={search} />
        ) : tabValue.value === 2 ? (
          <Archive search={search} />
        ) : (
          <AddPost search={search} />
        )}
      </div>
    );
  }
}
function mapStateToProps(store) {
  return {
    tabValue: store.tabValue,
  };
}
export default connect(mapStateToProps)(MainComponent);
