import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const backgroundShape = require("../../../../imagenes/CronoIns3.JPG");

const useStyles = makeStyles({

  root: {
    maxWidth: 500,
    
  },
  media: {
   
    height: 250,
    background: `url(${backgroundShape}) no-repeat`, 
    flexGrow: 1,
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "top",
  
  
  },  
});

export default function ImgMediaCard() {
 
  const classes = useStyles();
  return (
     
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia className={classes.media}
                
                alt="Paso 3 de Cálculo Cronometrado"
                
                
                title="Dar clic en el boton de REVISAR para conocer tu resultado."
                />
                <CardContent>
                <Typography>
                    Paso no. 3
                </Typography>
                
                </CardContent>
            </CardActionArea>
            
        </Card>
   
  );
}