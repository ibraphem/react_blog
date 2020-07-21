import React from 'react';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';


import ArticleGrid from './articleGrid';


const ArticleContainer = (props) => {

   // console.log(props);

    

   

const useStyles = makeStyles((theme) => ({
    blogContainer:{
        paddingTop: theme.spacing(3)
      },
      blogTitle:{
        fontWeight:800,
        paddingBottom: theme.spacing(3)
      },
  }));
  

    const classes = useStyles();

    if(props.news !== undefined) {

      //  console.log(props.news);

        const items = props.news.map((item, index)=>{
            return(
                
          
                <ArticleGrid  item={item} key={index}/>
                
            )
        });
  
    return (
        
        <Container maxWidth='lg' className={classes.blogContainer}>
            <Typography className={classes.blogTitle} variant="h4">
            Articles
            </Typography>

            <Grid container spacing={3}>
                {items}
                </Grid>
           
        </Container>
  
    
    );

}

}


export default ArticleContainer; 