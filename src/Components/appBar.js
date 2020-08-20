import React,{memo} from 'react';
import { useDispatch } from 'react-redux'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:10,
    backgroundColor:'black'
    // position: 'fixed'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: 'black',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputRoot: {
    color: 'white',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const AppBarComp = memo((props)=> {
    const classes = useStyles();
    const dispatch = useDispatch()
        const onChange = (e) => {
            const {target:{value}} = e || {}
            dispatch({type:'SEARCH_CONTENTS',payload : value})
        }
    return (
        <div id = 'myHeader' className={classes.root}>
          <AppBar position="fixed" style={{backgroundColor:'black'}}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <ArrowBackIcon />
              </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
                Romantic Comedy
              </Typography>
              <div className={classes.search}>
                <InputBase
                //   placeholder="Search…"
                  classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  inputProps={{ 'aria-label': 'search' }}
                  onChange={onChange}
                />
                    <SearchIcon style = {{marginTop:15}}/>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      );
})

export default AppBarComp

