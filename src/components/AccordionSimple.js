import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: "2em",
    marginTop: "6.5em",

  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const AccordionSimple = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion position="fixed">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Carrito de compras</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Tendriamos los items del carrito de compras 
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AccordionSimple;