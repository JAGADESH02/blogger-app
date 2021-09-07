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
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { UnlikePost } from "../../Actions/normalActions";
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
class Favorites extends Component {
  render() {
    const { classes, search, likePost, dispatch } = this.props;

    return (
      <List className={classes.root}>
        {likePost.data.length > 0 ? (
          likePost.data
            .filter((data) => data.title.includes(search))
            .map((posted) => {
              let firstLetter = posted.title.split(" ")[0].slice(0, 1);
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
                        aria-label="delete"
                        onClick={() => dispatch(UnlikePost(posted.id, posted))}
                      >
                        <CloseIcon />
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
            <h1>No Favorites Posts Found</h1>
          </div>
        )}
      </List>
    );
  }
}

function mapStateToProps(store) {
  return {
    likePost: store.likePost,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(useStyles(Favorites));
