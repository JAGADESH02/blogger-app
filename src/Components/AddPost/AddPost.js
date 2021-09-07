import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import endPoints from "../../Endpoints/endPoints";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AddPostData } from "../../Actions/normalActions";

const useStyles = withStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    marginTop: "6.5em",
  },
  rootText: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "60%",
    },
  },
  rootButton: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      title: "",
      userId: "",
      message: "",
      open: false,
      loading: false,
    };
  }
  handleChange = (event, name) => {
    this.setState({ [name]: event.target.value });
  };
  handleClose = () => {
    this.setState({ open: false, message: "" });
  };
  handleReset = () => {
    this.setState({ description: "", title: "", userId: "" });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch, postAdd } = this.props;
    const data = {
      title: this.state.title,
      body: this.state.description,
      userId: this.state.userId,
    };
    this.setState({ loading: true });
    axios
      .post(endPoints.url, { data })
      .then((res) => {
        let id =
          postAdd.data.length > 0
            ? postAdd.data.slice(-1)[0].id + 1
            : res.data.id;
        let responseData = {
          title: res.data.data.title,
          body: res.data.data.body,
          userId: res.data.data.userId,
          id,
          liked:false,
          archived:false
        };
        dispatch(AddPostData(responseData));
        this.setState(
          { message: "Post added", open: true, loading: false },
          () => {
            this.handleReset();
          }
        );
      })
      .catch((err) =>
        this.setState({ message: err.message, open: true, loading: false })
      );
  };
  render() {
    const { classes } = this.props;
    const { description, title, userId, open, message, loading } = this.state;
    return (
      <>
        <div className={classes.root}>
          <form className={classes.rootText} noValidate autoComplete="off">
            <div>
              <TextField
                required
                id="outlined-required"
                label="Title"
                value={title}
                onChange={(event) => this.handleChange(event, "title")}
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                id="outlined-multiline-flexible"
                label="Description"
                multiline
                rowsMax={4}
                value={description}
                onChange={(event) => this.handleChange(event, "description")}
                variant="outlined"
              />
            </div>
            <div>
              <TextField
                required
                id="outlined-required"
                label="User ID"
                value={userId}
                type="number"
                onChange={(event) => this.handleChange(event, "userId")}
                variant="outlined"
              />
            </div>
            <div className={classes.rootButton}>
              <Button
                variant="outlined"
                color="primary"
                onClick={(event) => this.handleSubmit(event)}
                disabled={
                  title === ""
                    ? true
                    : description === ""
                    ? true
                    : userId === ""
                    ? true
                    : false
                }
              >
                Submit
              </Button>

              <Button
                variant="outlined"
                color="primary"
                onClick={() => this.handleReset()}
              >
                Reset
              </Button>
            </div>
          </form>
        </div>
        <Backdrop className={classes.backdrop} open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          key={{ vertical: "bottom", horizontal: "center" }}
          open={open}
          message={message}
          autoHideDuration={3000}
          onClose={this.handleClose}
        />
      </>
    );
  }
}

function mapStateToProps(store) {
  return {
    postAdd: store.postAdd,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(useStyles(AddPost));
