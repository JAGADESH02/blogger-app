import React, { Component } from "react";
import "../../App.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ArchiveIcon from "@material-ui/icons/Bookmark";
import UnarchiveIcon from "@material-ui/icons/BookmarkBorder";
import CloseIcon from "@material-ui/icons/Close";
import { getPostData } from "../../Actions/asyncActions";
import {
  clearPostData,
  LikePost,
  UnlikePost,
  ArchivePost,
  UnarchivePost,
} from "../../Actions/normalActions";
import { connect } from "react-redux";
const useStyles = withStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: "4.5em",
  },
  inline: {
    display: "inline",
  },
}));
class Post extends Component {
  componentDidMount() {
    this.props.dispatch(getPostData());
  }
  componentWillUnmount() {
    this.props.dispatch(clearPostData());
  }
  render() {
    const {
      classes,
      postData,
      likePost,
      archivePost,
      postAdd,
      dispatch,
      search,
    } = this.props;
    const dataPresent = postData.dataPresent;
    const dataFetched = postData.fetched;

    if (dataPresent) {
      const data = this.props.postData.data;
      let post = data !== null ? data.concat(postAdd.data) : [];
      let allPost = post.filter((data) => data.title.includes(search));
      return (
        <List className={classes.root}>
          {allPost.length > 0 ? (
            allPost.map((posted) => {
              let firstLetter = posted.title.split(" ")[0].slice(0, 1);
              let like =
                likePost.id.filter((val) => {
                  return val === posted.id;
                }).length > 0;
              let archive =
                archivePost.id.filter((val) => {
                  return val === posted.id;
                }).length > 0;
              Object.assign(posted, { liked: like, archived: archive });
              return (
                <>
                  <ListItem alignItems="flex-start" key={posted.id}>
                    <ListItemAvatar>
                      <Avatar>{firstLetter}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={posted.title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {posted.body}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="like"
                        onClick={() =>
                          !posted.liked
                            ? dispatch(LikePost(posted.id, posted))
                            : dispatch(UnlikePost(posted.id, posted))
                        }
                      >
                        {!posted.liked ? (
                          <FavoriteBorderIcon />
                        ) : (
                          <FavoriteIcon />
                        )}
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="archive"
                        onClick={() =>
                          !posted.archived
                            ? dispatch(ArchivePost(posted.id, posted))
                            : dispatch(UnarchivePost(posted.id, posted))
                        }
                      >
                        {!posted.archived ? <UnarchiveIcon /> : <ArchiveIcon />}
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </>
              );
            })
          ) : (
            <div>
              <CloseIcon style={{ fontSize: 100 }} />
              <h1>No Posts Found</h1>
            </div>
          )}
        </List>
      );
    }
    if (!dataPresent && dataFetched) {
      return (
        <div>
          <CloseIcon style={{ fontSize: 100 }} />
          <h1>No Posts Found</h1>
        </div>
      );
    } else {
      return (
        <List className={classes.root}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
            return (
              <>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Skeleton
                      animation="wave"
                      variant="circle"
                      width={40}
                      height={40}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Skeleton
                        animation="wave"
                        height={20}
                        width="40%"
                        style={{ marginBottom: 8 }}
                      />
                    }
                    secondary={
                      <Skeleton animation="wave" height={20} width="80%" />
                    }
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <Skeleton
                        animation="wave"
                        variant="circle"
                        width={20}
                        height={20}
                      />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <Skeleton
                        animation="wave"
                        variant="circle"
                        width={20}
                        height={20}
                      />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            );
          })}
        </List>
      );
    }
  }
}

function mapStateToProps(store) {
  return {
    postData: store.postData,
    likePost: store.likePost,
    archivePost: store.archivePost,
    postAdd: store.postAdd,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(useStyles(Post));
