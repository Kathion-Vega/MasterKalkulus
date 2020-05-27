import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Grid from '@material-ui/core/Grid';
import CardInstrcCorr1 from "./CorridoInstrucCards/CardInstrcCorr1";

const useStyles = makeStyles({

  root: {
    width: '100%',
  },
  heading: {
    color: "#1c1c42",
/*     fontSize: theme.typography.pxToRem(25), */
    fontWeight: "900",
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
          <Typography className={classes.heading}>Cálculo No Cronometrado </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              
                <Typography className={classes.texto}>
                    Cálcular paso a paso sin cronometraje te ayudará a reforzar tus procesos mentales en el momento de llevar la cuenta. Aquí no mejoras tu velocidad sino tus conocimientos en aritmetica.
                </Typography>
            </Grid>
      
      
            <Grid item xs={12} sm={6}>
              <CardInstrcCorr1/>
            </Grid>
            
            
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
     
    </div>
    
  );
}