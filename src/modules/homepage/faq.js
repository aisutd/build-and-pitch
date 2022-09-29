import { Box, Divider, Grid, Typography } from "@mui/material";
import Questions from "./questions";

export default function Faq() {
    return (
        <>
        <Grid container alignItems="center" justifyContent="flex-start">
            <Grid item xs={1}>
                <Divider variant="middle" sx={{width: "50%", borderBottomWidth: 5, bgcolor: "#FF6000", }}/>
            </Grid>
            <Grid item xs={5}>
                <Typography fontWeight={900} fontFamily="fira code" color="#FF6000" fontSize={85} sx={{textShadow: "rgba(255, 96, 0, 0.5) 5.00866px 5.00866px 0px, rgba(255, 96, 0, 0.3) 10.0173px 10.0173px 0px"}}>
                    FAQ
                </Typography>
            </Grid>
        </Grid>
        <Box mb={10}/>
        <Grid container alignItems="center" justifyContent="center">
            <Questions/>
        </Grid>
        <Box height={300}/>
        <Grid container alignItems="center" justifyContent="center">
            <Grid item>
                <Typography fontWeight={900}textTransform="none" fontFamily="ibm plex mono" color="white" fontSize={30}>
                    Have other questions? Feel free to contact us!
                </Typography>
            </Grid>
           
        </Grid>
      </>
    );
}