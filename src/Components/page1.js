import React, { memo, useEffect } from 'react'
import { jsonPlaceholderGetReq } from '../Redux/actions/jsonPlaceHolderAction'
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';

import {  useSelector, useDispatch } from 'react-redux'

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
    width: '60%',
    height: '80%',
  }
}));

const Page1 = memo(function Page1(props) {
  const classes = useStyles();
    const dispatch = useDispatch()
    const jsonAxiosGetResult = useSelector(state => state.jsonPlaceHolderReducer.jsonAxiosGetResult) 
    const {page:{'content-items':{content=[]}={}}={}} = jsonAxiosGetResult
  
    useEffect(() => {
      dispatch(jsonPlaceholderGetReq())
    }, [])

    return (
      <div className={classes.root}>
        <Grid 
        container 
        direction="row"
        // justify="center" 
        alignItems="center"
        className={classes.gridList} 
        // spacing={2}
        // cols={3}
        >
        {content.map((tile,index) => (
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
    );
})



export default Page1
