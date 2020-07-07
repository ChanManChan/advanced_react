import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
});

export function Vacation({ vacation }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          className={classes.media}
          src={vacation.image}
          title={vacation.description}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {vacation.destination}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {vacation.description}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Price: {vacation.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size='small' color='primary'>
          Order
        </Button>
        <Link to={`/vacation/${vacation.id}`}>
          <Button size='small' color='secondary'>
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

Vacation.propTypes = {
  vacation: PropTypes.object,
};

export default Vacation;
