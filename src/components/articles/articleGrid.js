
import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import { red } from '@material-ui/core/colors';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';






const useStyles = makeStyles((theme) => ({

  cardRoot: {
    maxWidth: 345,
    margin:10
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },


}));





function App(item) {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

 

  return (
    <div className="App">
       <div className={classes.root}>
      
      
      

      <Container maxWidth='lg' className={classes.blogContainer}>
      
         
          <Grid item xs={12} sm={12} md={12}>
          <Card className={classes.cardRoot}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            I
          </Avatar>
        }
        
        title={item.item.author}
        
      />
      <CardMedia
        className={classes.media}
        image={item.item.urlToImage}
        
      />
      <CardContent>
          {item.item.title} 

        <Typography variant="body2" color="textSecondary" component="p">
          {item.item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Story:</Typography>
          <Typography paragraph>
            {item.item.content}
          </Typography>
         
        </CardContent>
      </Collapse>
    </Card>
          </Grid>
          
        

        
          
      </Container>
    </div>

    </div>
  );
}

export default App;
