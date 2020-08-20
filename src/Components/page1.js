import React, { memo, useEffect , useRef} from 'react'
import { connect } from 'react-redux'
import {Grid, makeStyles} from '@material-ui/core';
import { jsonPlaceholderGetReq } from '../Redux/actions/jsonPlaceHolderAction'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems:'center',
    overflow: 'auto',
    // backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '50%',
    height: '1000%',
  }
}));

const Page1 = memo((props)=> {
  const hookRef = useRef()
  const classes = useStyles();
  const {contents, nextPageTocall, callPages} = props

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }
    callPages({pageNo:nextPageTocall})
    const observer = new IntersectionObserver(handleObserver,options)
    observer.observe(hookRef.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 
  
  const handleObserver = () => {
    const {store} = window
    const storeNextPage = store.getState().jsonPlaceHolderReducer.nextPageTocall
    if(storeNextPage < 4) callPages({pageNo:storeNextPage})
    }

    return (
      <div
        className={classes.root}
        >
      <div 
        className={classes.root}
      >
        <Grid 
        container 
        direction="row"
        alignItems="center"
        className={classes.gridList}
        >
        {contents.map((tile,index) => (
          <Grid key={`${index}_${tile.name}`}
          item
          xs={4}
          >
            <img src={`${process.env.PUBLIC_URL}/Slices/${tile['poster-image']}`} alt={tile.name} />
          <h3>{tile.name}</h3>
          </Grid>
        ))}
      </Grid>
      </div>
      <div
      ref={hookRef}
      >
        
        </div>
        </div>
    );
})

function mapStateToProps(state,ownprops) {
  return {
    nextPageTocall: state.jsonPlaceHolderReducer.nextPageTocall,
    contents:state.jsonPlaceHolderReducer.contents
  }
}

function mapDispatchToProps(dispatch) {
  return {
    callPages: ({pageNo}) => dispatch(jsonPlaceholderGetReq({pageNo})),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page1)
