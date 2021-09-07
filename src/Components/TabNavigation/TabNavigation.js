import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import FileIcon from "@material-ui/icons/Description";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArchiveIcon from "@material-ui/icons/Bookmark";
import LibraryAddIcon from "@material-ui/icons/LibraryAdd";
// import { Switch, Route, Link } from "react-router-dom";
import {changeTabValue} from '../../Actions/normalActions';
import {connect} from 'react-redux';
const useStyles = withStyles({
  root: {
    width: "70%",
  },
});

class TabNavigation extends React.Component {
  render() {
    const { classes,tabValue,dispatch } = this.props;
    return (
      <>
        <Tabs
          value={tabValue.value}
          onChange={(event, newValue) => dispatch(changeTabValue(event, newValue))}
          indicatorColor="primary"
          textColor="primary"
          centered
          className={classes.root}
        >
          <Tab label="Post" icon={<FileIcon />} />
          <Tab label="Favorites" icon={<FavoriteIcon />} />
          <Tab label="Saved" icon={<ArchiveIcon />} />
          <Tab label="Add Post" icon={<LibraryAddIcon />} />
        </Tabs>
      </>
    );
  }
}
function mapStateToProps(store) {
  return {
    tabValue: store.tabValue
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(useStyles(TabNavigation));
