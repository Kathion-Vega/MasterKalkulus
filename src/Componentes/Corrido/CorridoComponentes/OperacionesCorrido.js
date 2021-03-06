import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import DictadoCorrido from './DictadoCorrido';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OperacionesCorrido () {
  
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Escribe el resultado final
        </Typography>
      </CardContent>
      <CardActions style={{padding: "0px"}} >
        <DictadoCorrido />
      </CardActions>
    </Card>
  );
}