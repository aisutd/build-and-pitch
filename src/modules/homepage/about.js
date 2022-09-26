import { Box, Divider, Grid, Paper, Typography } from "@mui/material";
import { width } from "@mui/system";
import date from "../../images/date.png";
import location from "../../images/location.png";
import person from "../../images/Person.svg";
import lightbulb from "../../images/LightBulb.svg";

export default function About() {
    return (
        <>
        <Grid container wrap="nowrap" alignItems="center" justifyContent="flex-start">
            <Grid item xs={1}>
                <Divider variant="middle" sx={{width: "50%", borderBottomWidth: 5, bgcolor: "#FF6000", }}/>
            </Grid>
            <Grid item xs={5}>
                <Typography fontWeight={900} fontFamily="fira code" color="#FF6000" fontSize={85} sx={{textShadow: "rgba(255, 96, 0, 0.5) 5.00866px 5.00866px 0px, rgba(255, 96, 0, 0.3) 10.0173px 10.0173px 0px"}}>
                    ABOUT
                </Typography>
            </Grid>
        </Grid>
        <Box mb={10}/>
        <Grid container wrap="nowrap" alignItems="center" justifyContent="center">
            <Grid item xs={3.5}>
                <img src={date} width="300px"/>
            </Grid>
            <Grid item xs={2}>
                <img src={location} width="300px"/>
            </Grid>
        </Grid>
        <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        mt={20}
        mb={-10}
        >
            <Grid item>
                <Box width="400px" height="20px" bgcolor="#00B9FF"></Box>  
            </Grid>
        </Grid>
        <Divider variant="middle" sx={{bgcolor: "#00B9FF", mt: 10,textAlign: "center", mb:12}}/>
        <Grid container wrap="nowrap">
            <Grid item xs={1.3} ml={5}>
                <img src={lightbulb} width="150px"/>
            </Grid>
            <Grid item xs={5} mt={6}>
                <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                    What is build and pitch?
                </Typography>
            </Grid>
            <Grid item xs={5} mt={6}>
                <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={20}>
                6 hour event to create a business pitch and build a prototype(does not have to be code just showcase ur stuff) based on a mystery topic about tech  
                </Typography>
            </Grid>
        </Grid>
        <Grid container wrap="nowrap">
            <Grid item xs={1.3} ml={5}>
                <img src={person} width="150px"/>
            </Grid>
            <Grid item xs={5} mt={6}>
                <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={30}>
                    Who can participate?
                </Typography>
            </Grid>
            <Grid item xs={5} mt={7}>
                <Typography fontWeight={900}textTransform="none" fontFamily="fira code" color="white" fontSize={20}>
                    All UTD Students
                </Typography>
            </Grid>
        </Grid>
        <Divider variant="middle" sx={{bgcolor: "#00B9FF", mt: 10,textAlign: "center",}}/>
        <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        >
            <Grid item>
                <Box width="400px" height="20px" bgcolor="#00B9FF"></Box>  
            </Grid>
        </Grid>
        
      </>
    );
}