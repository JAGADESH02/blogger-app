import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import EmojiObjects from '@material-ui/icons/EmojiObjects';
import TabNavigation from '../TabNavigation/TabNavigation';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontSize:'50px !important'
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "absolute",
    borderRadius: theme.shape.borderRadius,
    right:10,
    marginLeft: 0,
    width: "15%",
    background: "#eaeaea",
    [theme.breakpoints.down("md")]: {
      position: "relative",
      right:0,
      marginLeft: theme.spacing(1),
      width: "100%",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  appBar: {
    background: "#f5f5f5",
    borderBottom: "0.5px solid rgba(0, 0, 0, 0.12)",
    color: "black",
    boxShadow:'0px 0px 0px 0px'
  },
}));

export default function Header(props) {  
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <EmojiObjects className={classes.menuButton}/>
          <Typography className={classes.title} variant="h6" noWrap>
            E-Blogger
          </Typography>
          <TabNavigation {...props}/>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(e)=>props.handleSearch(e)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
