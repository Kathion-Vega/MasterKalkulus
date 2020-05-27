import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardInstrucCrono1 from "./CronoInstrucCards/CardInstrucCrono1";
import CardInstrucCrono2 from "./CronoInstrucCards/CardInstrucCrono2";
import CardInstrucCrono3 from "./CronoInstrucCards/CardInstrucCrono3";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({

  root: {
    width: '100%',
    
  },
  heading: {
    color:"#f54b24",
  /*   fontSize: theme.typography.pxToRem(25), */
    fontWeight: "900",
  
  },
  texto:{
    margin: 50,
    
  },
});

export default function SimpleExpansionPanel() {
 
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Cálculo Cronometrado</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              
                <Typography className={classes.texto}>
                    Cálcular acompañado de un cronometraje te ayudará a lograr a realizar las operaciones con más velocidad. Es un cálculo que se contesta paso a paso. Recuerda es para acelerar tu procedimiento al calcular.
                </Typography>
            </Grid>
      
      
            <Grid item xs={12} sm={6}>
              <CardInstrucCrono1 />
            </Grid>
            <Grid item xs={12} sm={6}>
          
              <CardInstrucCrono2 />
            </Grid>
            <Grid item xs={12} sm={6}>  
              
              <CardInstrucCrono3 />
            </Grid>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     
    </div>
  );
}