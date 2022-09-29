import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import "@fontsource/fira-code";

// sx={{display: {xs: "400px", sm: 6, md: 1}}}

export default function Questions() {
  return (<div>
    <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color: 'white'}} />}
        sx={{bgcolor: "black", color: "white"}}
      >
        <Typography fontFamily="fira code" >What experience do I need?</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{bgcolor: "#424242", color: "white"}}>
        <Typography fontFamily="fira code">
          Absolutely none! We will have resources for you at the event, so you don’t need any previous pitching experience
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color: "white"}} />}
        sx={{bgcolor: "black", color: "white"}}
      >
        <Typography fontFamily="fira code">Do I need a team?</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{bgcolor: "#424242", color: "white"}}>
        <Typography fontFamily="fira code">
          You can join as a team, or we will create one for you
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color: 'white'}} />}
        sx={{bgcolor: "black", color: "white"}}
      >
        <Typography fontFamily="fira code">How big can my team be?</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{bgcolor: "#424242", color: "white"}}>
        <Typography fontFamily="fira code">
          The team member limit is four people
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color: "white"}} />}
        sx={{bgcolor: "black", color: "white"}}
      >
        <Typography fontFamily="fira code">What do I need to bring?</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{bgcolor: "#424242", color: "white"}}>
        <Typography fontFamily="fira code">
          You will only need a device to work on! We will provide food at the event. 
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color: 'white'}} />}
        sx={{bgcolor: "black", color: "white"}}
      >
        <Typography fontFamily="fira code">How much does it cost?</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{bgcolor: "#424242", color: "white"}}>
        <Typography fontFamily="fira code">
          Its completely free :)
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion sx={{maxWidth: "1300px"}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{color: "white"}} />}
        sx={{bgcolor: "black", color: "white"}}
      >
        <Typography fontFamily="fira code">What will I get out of it?</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{bgcolor: "#424242", color: "white"}}>
        <Typography fontFamily="fira code">
          Free food, pitching experience, prizes if you win, the chance to network with silicon valley entrepreneur, and a chance to get internships.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>);
}